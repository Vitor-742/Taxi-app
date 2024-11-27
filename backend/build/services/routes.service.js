"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ModelStatic } from 'sequelize'
// import Driver from '../database/models/Driver'
// import resp from '../utils/resp';
// const { RoutesClient } = require("@googlemaps/routing").v2;
const routing_1 = require("@googlemaps/routing");
class RoutesService {
    origin = {
        location: {
            latLng: {
                latitude: 37.419734,
                longitude: -122.0827784,
            },
        },
    };
    destination = {
        location: {
            latLng: {
                latitude: 37.41767,
                longitude: -122.079595,
            },
        },
    };
    routingClient = new routing_1.RoutesClient();
    async getRouteData() {
        const request = {
            origin: this.origin,
            destination: this.destination,
        };
        // Run request
        const response = await this.routingClient.computeRoutes(request, {
            otherArgs: {
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
                    "X-Goog-FieldMask": "*",
                },
            },
        });
        console.log(response);
    }
}
exports.default = RoutesService;
