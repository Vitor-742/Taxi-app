import { ModelStatic, Op } from 'sequelize'
import User from '../database/models/User'

class UserService {
    private model: ModelStatic<User> = User;

    async checkUser(id: string) {
      try {
        const user = await this.model.findByPk(id, {
            attributes: ['id'],
        });

        if (!user) {
            this.model.create({
                id,
                name: "nome_usuario"
            })
        }
      
      
        return user
        
      } catch (error) {
        console.log(error)
        throw(error)
      }
    }
}

export default UserService;