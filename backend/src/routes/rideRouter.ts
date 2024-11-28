import express from "express";
import RideController from '../controllers/ride.controller'

const router = express.Router();
const rideController = new RideController();

router.post('/estimate', rideController.estimate.bind(rideController));

router.patch('/confirm', rideController.confirm.bind(rideController));

router.get('/:customer_id', rideController.listTravels.bind(rideController));

export default router