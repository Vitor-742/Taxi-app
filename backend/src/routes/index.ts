import { Router } from 'express';
import rideRouter from './rideRouter'

const router = Router();


router.use('/ride', rideRouter);


export default router;
