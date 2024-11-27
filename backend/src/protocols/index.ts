import axios from "axios";

export interface IEstimate {
    customer_id: string;
    origin: string;
    destination: string;
}

export interface IAPIResponse {
    distance: number;
    duration: string;
    origin: {
        latLng: {
            latitude: number;
            longitude: number;
        }
    };
    destination: {
        latLng: {
            latitude: number;
            longitude: number;
        }
    };
    routeResponse: axios.AxiosResponse;

  }