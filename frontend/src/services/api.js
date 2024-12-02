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
        console.error(error.message);
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
        console.error(error.message);
    }
}