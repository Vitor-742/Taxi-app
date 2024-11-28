import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";
import User from "./User";
import Driver from "./Driver";


class Travel extends Model {
    declare id: number
    declare driverId: number
    declare userId: number
    declare origin: string
    declare destination: string
    declare distance: number
    declare duration: string
    declare value: number
    declare date: Date
}

Travel.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      driverId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'driver',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      origin: {
        type: sequelize.STRING,
        allowNull: false
      },
      destination: {
        type: sequelize.STRING,
        allowNull: false
      },
      distance: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      duration: {
        type: sequelize.STRING,
        allowNull: false
      },
      value: {
        type: sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW,
      }
  },
  {
    sequelize: db,
    tableName: 'travel',
    timestamps: false,
    underscored: true
  }
)

Travel.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

Travel.belongsTo(Driver, {
    foreignKey: 'driverId',
    as: 'driver'
})

export default Travel;