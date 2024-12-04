import axios from 'axios'

export const estimateValue = async (customerId, originAddress, destinationAddress) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/ride/estimate',
            {
                customer_id: customerId,
                origin: originAddress,
                destination: destinationAddress,
            }
        );

        return response.data;
        
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error_description);
        }
    }
}

export const confirmTravel = async (
    {
        id,
        name,
        value
    }, 
    { 
        customerId,
        originAddress,
        destinationAddress,
        estimateResponse:
            {
                distance,
                duration
            }
    }) => {
    try {

        const response = await axios.patch(
            'http://localhost:8080/ride/confirm',
            {
                customer_id: customerId,
                origin: originAddress,
                destination: destinationAddress,
                duration,
                distance,
                driver: {
                    id,
                    name
                },
                value
            }
        );

        return response.data;
        
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error_description);
        }
    }
}

export const getTravels = async (customerId, driverId) => {

    const urlString = `http://localhost:8080/ride/${customerId}?driver_id=${driverId}`


    try {

        const response = await axios.get(urlString);
        return response.data;
        
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error_description);
        }
    }
}