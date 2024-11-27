import { ModelStatic, Op } from 'sequelize'
import Travel from '../database/models/Travel'
import { IConfirm } from '../protocols';

class TravelService {
    private model: ModelStatic<Travel> = Travel;

    async getAll() {
        const travels = await this.model.findAll();
        return travels
    }

    async create({
            customer_id,
            origin,
            destination,
            distance,
            duration,
            driver,
            value
        }: IConfirm) {
        const newTravel = await this.model.create({
            userId: customer_id,
            origin,
            destination,
            distance,
            duration,
            driverId: driver.id,
            value
        });
        return newTravel
    }

}

export default TravelService;