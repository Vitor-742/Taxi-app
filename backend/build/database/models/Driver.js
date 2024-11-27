"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class Driver extends sequelize_1.Model {
}
Driver.init({
    id: {
        type: sequelize_2.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    car: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    rating: {
        type: sequelize_2.default.INTEGER,
        allowNull: false
    },
    comment: {
        type: sequelize_2.default.STRING,
        allowNull: false
    },
    fee: {
        type: sequelize_2.default.FLOAT,
        allowNull: false
    },
    minimumDistance: {
        type: sequelize_2.default.INTEGER,
        allowNull: false
    }
}, {
    sequelize: _1.default,
    tableName: 'driver',
    timestamps: false,
    underscored: true
});
exports.default = Driver;
