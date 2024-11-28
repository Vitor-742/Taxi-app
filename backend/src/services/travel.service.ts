import { ModelStatic, Op } from 'sequelize'
import Travel from '../database/models/Travel'
import { IConfirm } from '../protocols';
import Driver from '../database/models/Driver';

class TravelService {
    private model: ModelStatic<Travel> = Travel;

    async getByCustomerId(customerId: string) {
        const travels = await this.model.findAll({
            include: [
                {
                  model: Driver,
                  as: 'driver',
                  attributes: ['id', 'name'],
                },
              ],
            where: {
                userId: customerId
            },
            order: [['date', 'DESC']]
        });
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