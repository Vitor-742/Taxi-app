"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
const User_1 = __importDefault(require("./User"));
const Driver_1 = __importDefault(require("./Driver"));
class Travel extends sequelize_1.Model {
}
Travel.init({
    id: {
        type: sequelize_2.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    driverId: {
        type: sequelize_2.default.INTEGER,
        allowNull: false,
        references: {
            model: 'driver',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    userId: {
        type: sequelize_2.default.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    origin: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    destination: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    distance: {
        type: sequelize_2.default.INTEGER,
        allowNull: false
    },
    duration: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    value: {
        type: sequelize_2.default.FLOAT,
        allowNull: false
    },
    date: {
        type: sequelize_2.default.DATE,
        allowNull: false,
        defaultValue: sequelize_2.default.NOW
    }
}, {
    sequelize: _1.default,
    tableName: 'travel',
    timestamps: true,
    underscored: true
});
Travel.belongsTo(User_1.default, {
    foreignKey: 'userId',
    as: 'user'
});
Travel.belongsTo(Driver_1.default, {
    foreignKey: 'driverId',
    as: 'driver'
});
exports.default = Travel;
