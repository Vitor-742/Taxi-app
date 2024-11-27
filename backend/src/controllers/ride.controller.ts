import { Request, Response, NextFunction } from "express";
import RideService from "../services/ride.service";
import { object, string, number, date, InferType, ObjectSchema, ValidationError, ref } from 'yup';
import errorResp from "../utils/errorResp";
import { StatusCodes } from "http-status-codes";


class RideController {
    private rideService = new RideService()
    private estimateSchema = object({
        customer_id: string().required(),
        origin: string().required(),
        destination: string().required().test(
            'is-origin-different',
            'Origin and destination must be different',
            (value, context) => value != context.parent.origin
          ),
      });

    private async validateBody(req: Request, schema: ObjectSchema<any>) {
        try {
            await schema.validate(req.body);
        } catch (error) {
            const yupError = error as ValidationError;
            console.log(yupError);
            return yupError;
        }
        return "";

    }

    async estimate(req: Request, res: Response, _next: NextFunction) {
        const isBodyValid = await this.validateBody(req, this.estimateSchema)
        if (isBodyValid !== "") {
            res.status(StatusCodes.BAD_REQUEST).json(errorResp("INVALID_DATA", isBodyValid.message));
        }
        try {

            const estimateResponse = await this.rideService.estimate(req.body);

            console.log(estimateResponse)

            res.status(200).json(estimateResponse)
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default RideController;