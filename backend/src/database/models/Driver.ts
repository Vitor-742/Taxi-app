import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";


class Driver extends Model {
    declare id: number
    declare name: string
    declare description: string
    declare car: string
    declare rating: number
    declare comment: string
    declare fee: number
    declare minimumDistance: number
}

Driver.init({
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    description: {
      type: sequelize.STRING,
      allowNull: false
    },
    car: {
      type: sequelize.STRING,
      allowNull: false
    },
    rating: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    comment: {
      type: sequelize.STRING,
      allowNull: false
    },
    fee: {
      type: sequelize.FLOAT,
      allowNull: false
    },
    minimumDistance: {
      type: sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'driver',
    timestamps: false,
    underscored: true
  }
)

export default Driver;