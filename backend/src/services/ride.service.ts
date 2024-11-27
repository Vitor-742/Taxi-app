import DriverService from './driver.service';
import RoutesService from './routes.service';
import { IAPIResponse, IConfirm, ICustomError, IEstimate } from '../protocols';
import resp from '../utils/resp';
import errorRespStatus from '../utils/errorRespStatus';
import { StatusCodes } from 'http-status-codes';
import TravelService from './travel.service';
import UserService from './user.service';

class RideService {
    private driverService = new DriverService();
    private travelService = new TravelService();
    private userService = new UserService();

    async estimate(data: IEstimate) {
        const routesService = new RoutesService();
        
        try {

            // API Response
            const APIMapsResponse: IAPIResponse = await routesService.getRouteData(data);

            console.log(APIMapsResponse)

            const KMdistance = APIMapsResponse.distance / 1000
            // Get drivers
            const drivers = await this.driverService.getByKm(KMdistance);

            const driversList = []

            for (const driver of drivers) {
                driversList.push({
                    id: driver.id,
                    name: driver.name,
                    description: driver.description,
                    vehicle: driver.car,
                    review: {
                        rating: driver.rating,
                        comment: driver.comment
                    },
                    value: driver.fee * KMdistance
                })
            }

            const response = {
                ...APIMapsResponse,
                options: driversList,
            }

            console.log(response)

            return response;

        } catch (error) {
            console.log(error)
            throw(error)
        }
    }

    async confirm(data: IConfirm) {
        
        try {

            const KMdistance = data.distance / 1000

            // Get drivers
            const drivers = await this.driverService.getAll();

            for (const driver of drivers) {
                if (driver.id === data.driver.id) {

                    if (driver.minimumDistance > KMdistance) {
                        throw(errorRespStatus(StatusCodes.NOT_ACCEPTABLE, "INVALID_DISTANCE", "Invalid distance for driver")) as ICustomError;
                    }

                    await this.userService.checkUser(data.customer_id);

                    await this.travelService.create(data);

                    return { "success": true };
                }
            }

            throw(errorRespStatus(StatusCodes.NOT_FOUND, "DRIVER_NOT_FOUND", "Driver not found")) as ICustomError;

        } catch (error) {
            console.log(error)
            throw(error)
        }
    }
}

export default RideService;