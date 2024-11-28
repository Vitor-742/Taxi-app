import axios from 'axios';
import { IAPIResponse, IEstimate } from '../protocols';
import { response } from 'express';


class RoutesService {
  
    async getRouteData(data: IEstimate) {

        const requestBody = {
            origin: {
                address: data.origin,
            },
            destination: {
                address: data.destination,
            },
            travelMode: 'DRIVE',
          };

        try {
          const response = await axios.post('https://routes.googleapis.com/directions/v2:computeRoutes', requestBody, {
              headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
                "X-Goog-FieldMask": "*",
              },
            });

            const responseLegs = response.data.routes[0].legs[0];

            const requestResult = {
              distance: responseLegs.distanceMeters,
              duration: responseLegs.duration,
              origin: responseLegs.startLocation.latLng,
              destination: responseLegs.endLocation.latLng,
              routeResponse: response.data
            }

            return requestResult;
        } catch (error) {
          console.error(error);
          throw(error)
        }
        
        
    }
}

export default RoutesService;