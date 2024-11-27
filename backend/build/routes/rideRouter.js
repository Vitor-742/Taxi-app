"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ride_controller_1 = __importDefault(require("../controllers/ride.controller"));
const router = express_1.default.Router();
const rideController = new ride_controller_1.default();
router.post('/estimate', rideController.estimate.bind(rideController));
exports.default = router;
