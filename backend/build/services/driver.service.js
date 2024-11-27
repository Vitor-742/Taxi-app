"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = __importDefault(require("../database/models/Driver"));
const resp_1 = __importDefault(require("../utils/resp"));
class DriverService {
    model = Driver_1.default;
    async get() {
        const drivers = await this.model.findAll();
        return (0, resp_1.default)(200, drivers);
    }
}
exports.default = DriverService;
