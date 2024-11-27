import { ModelStatic, Op } from 'sequelize'
import Driver from '../database/models/Driver'

class DriverService {
    private model: ModelStatic<Driver> = Driver;

    async getByKm(distance: number) {
        const drivers = await this.model.findAll({
            where: {
                minimumDistance: {
                [Op.lte]: distance,
              },
            },
            order: [['fee', 'ASC']],
          });
        return drivers
    }
}

export default DriverService;