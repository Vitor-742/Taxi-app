import axios from "axios";

export interface IEstimate {
    customer_id: string;
    origin: string;
    destination: string;
}

export interface IConfirm extends IEstimate {
    distance: number;
    duration: string;
    driver: {
        id: number;
        name: string;
    };
    value: number
}

export interface ICustomError {
    status: number;
    error_code: string;
    error_description: string;
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