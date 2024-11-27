import { ModelStatic } from 'sequelize'
import Driver from '../database/models/Driver'
import resp from '../utils/resp';
import DriverService from './driver.service';
import RoutesService from './routes.service';
import { IAPIResponse, IEstimate } from '../protocols';

class RideService {
    private driverService = new DriverService();

    async estimate(data: IEstimate) {
        const routesService = new RoutesService();

        try {

            // API Response
            const APIMapsResponse: IAPIResponse = await routesService.getRouteData(data);

            // console.log(APIMapsResponse)

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

            // console.log(response)

            return response;

        } catch (error) {
            console.log(error)
            throw(error)
        }
    }
}

export default RideService;