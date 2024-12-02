import React, { useState } from "react";
import { estimateValue } from "../services/api";
import { Card } from "../components/Card";

function Home() {

    const [customerId, setCustomerId] = useState("")
    const [originAddress, setOriginAddress] = useState("")
    const [destinationAddress, setDestinationAddress] = useState("")
    const [estimateResponse, setEstimateResponse] = useState({})

    async function handleEstimateValue() {
        const response = await estimateValue(customerId, originAddress, destinationAddress);
        setEstimateResponse(response)

        console.log(response)
    }



  return (
    <div className="mainHome">
        <h1>Escolha seu destino</h1>

        <div className="inputs">
            <p>Id do cliente:</p>
            <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            />
            <p>Endereço de origem:</p>
            <input
            type="text"
            value={originAddress}
            onChange={(e) => setOriginAddress(e.target.value)}
            />
            <p>Endereço de destino:</p>
            <input
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            />
            <br/>
            <button
            onClick={handleEstimateValue}
            >Estimar valor da viagem</button>
        </div>
        <div className="resultsField">
            {Object.keys(estimateResponse).length > 0 && (
                <>
                    <h2>Opções de motoristas: </h2>
                    <div className="cardList">

                    {estimateResponse.options.map((driver) => (

                        <Card driver={driver} travelInfo={{customerId, originAddress, destinationAddress, estimateResponse}} />
                    ))}

                    </div>
                </>
            )}
        </div>
    </div>
);
}

export default Home;