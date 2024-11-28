import { ModelStatic, Op } from 'sequelize'
import Driver from '../database/models/Driver'

class DriverService {
    private model: ModelStatic<Driver> = Driver;

    async getByKm(distance: number) {
      try {
        const drivers = await this.model.findAll({
            where: {
                minimumDistance: {
                [Op.lte]: distance,
              },
            },
            order: [['fee', 'ASC']],
          });
        return drivers
        
      } catch (error) {
        console.log(error)
        throw(error)
      }
    }
    
    async getAll() {
        const drivers = await this.model.findAll();
        return drivers
    }

    async getById(id: string) {

      const driver = await this.model.findByPk(id, {
        attributes: ['id'],
    });

      return driver
  }
}

export default DriverService;