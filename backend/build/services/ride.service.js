"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const driver_service_1 = __importDefault(require("./driver.service"));
const routes_service_1 = __importDefault(require("./routes.service"));
class RideService {
    driverService = new driver_service_1.default();
    //private model: ModelStatic<Driver> = Driver;
    async estimate() {
        console.log(process.env.GOOGLE_API_KEY);
        const routesService = new routes_service_1.default();
        routesService.getRouteData();
        try {
            const drivers = await this.driverService.get();
            return drivers;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = RideService;
