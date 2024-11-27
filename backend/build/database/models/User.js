"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_2.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_2.default.STRING,
        allowNull: false
    }
}, {
    sequelize: _1.default,
    tableName: 'user',
    timestamps: false
});
exports.default = User;
