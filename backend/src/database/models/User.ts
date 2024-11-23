import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";
import Travel from "./Travel";


class User extends Model {
    declare id: number
    declare name: string
}

User.init({
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'user',
    timestamps: false
  }
)

export default User;