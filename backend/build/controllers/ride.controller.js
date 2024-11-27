"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ride_service_1 = __importDefault(require("../services/ride.service"));
const yup_1 = require("yup");
const errorResp_1 = __importDefault(require("../utils/errorResp"));
const http_status_codes_1 = require("http-status-codes");
class RideController {
    rideService = new ride_service_1.default();
    estimateSchema = (0, yup_1.object)({
        customer_id: (0, yup_1.string)().required(),
        origin: (0, yup_1.string)().required(),
        destination: (0, yup_1.string)().required().test('is-origin-different', 'Origin and destination must be different', (value, context) => value != context.parent.origin),
    });
    async validateBody(req, schema) {
        try {
            await schema.validate(req.body);
        }
        catch (error) {
            const yupError = error;
            console.log(yupError);
            return yupError;
        }
        return "";
    }
    async estimate(req, res, _next) {
        const isBodyValid = await this.validateBody(req, this.estimateSchema);
        if (isBodyValid !== "") {
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json((0, errorResp_1.default)("INVALID_DATA", isBodyValid.message));
        }
        try {
            // validação body
            // chamar api do google
            // fazer regras de negocio
            const drivers = await this.rideService.estimate();
            console.log(drivers);
            res.status(200).json(drivers);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = RideController;
