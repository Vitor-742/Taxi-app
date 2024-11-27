import { Request, Response, NextFunction } from "express";
import RideService from "../services/ride.service";
import { object, string, number, date, InferType, ObjectSchema, ValidationError, ref } from 'yup';
import errorResp from "../utils/errorResp";
import { StatusCodes } from "http-status-codes";
import { ICustomError } from "../protocols";


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
    
    private confirmSchema = object({
        customer_id: string().required(),
        origin: string().required(),
        destination: string().required().test(
            'is-origin-different',
            'Origin and destination must be different',
            (value, context) => value != context.parent.origin
            ),
        distance: number().required(),
        duration: string().required(),
        driver: object({
            id: number().required(),
            name: string().required(),
        }),
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
            return;
        }
        try {

            const estimateResponse = await this.rideService.estimate(req.body);

            console.log(estimateResponse)

            res.status(200).json(estimateResponse)
        } catch (error) {
            console.log(error)
        }
    }

    async confirm(req: Request, res: Response, _next: NextFunction) {
        const isBodyValid = await this.validateBody(req, this.confirmSchema)
        if (isBodyValid !== "") {
            res.status(StatusCodes.BAD_REQUEST).json(errorResp("INVALID_DATA", isBodyValid.message));
            return;
        }

        try {

            const confirmResponse = await this.rideService.confirm(req.body);

            console.log(confirmResponse)

            res.status(200).json(confirmResponse)
        } catch (error) {
            if ((error as ICustomError).status && (error as ICustomError).error_code && (error as ICustomError).error_description) {
                const { status, error_code, error_description } = error as ICustomError;

                res.status(status).json({error_code, error_description})
                
              } else {
                console.error(error);
        }
    }
    }
}

export default RideController;