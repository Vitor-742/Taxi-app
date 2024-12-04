import React, { useState } from "react";
import { getTravels } from "../services/api"
import { TravelCard } from "../components/TravelCard"

function Travels() {

  const [customerId, setCustomerId] = useState("")
  const [driverId, setDriverId] = useState("")
  const [buttonDriverDisable, setButtonDriverDisable] = useState(false)
  const [responseTravels, setResponseTravels] = useState({})

  const handleSearchTravels = async () => {
    setResponseTravels({}) 
    try {
      const response = await getTravels(customerId, buttonDriverDisable ? "" : driverId )
      if (response) setResponseTravels(response) 
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>Travels</h1>
      <p>ID do cliente:</p>
        <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        />
      <p>ID do motorista responsável:</p>
        <input
        type="text"
        value={driverId}
        onChange={(e) => setDriverId(e.target.value)}
        disabled={buttonDriverDisable}
        />
      <span className="searchRides">
        <p>Buscar corridas de todos os motoristas: </p>
        <input
        type="checkbox"
        checked={buttonDriverDisable}
        onChange={(e) => setButtonDriverDisable(e.target.checked)}
        />
      </span>
      
      <br/>
      <br/>
      <button
        onClick={handleSearchTravels}
        >Buscar corridas</button>
      <div className="resultsTravels">
        {Object.keys(responseTravels).length > 0 && (
                <>
                    <h2>Corridas encontradas: </h2>
                    <div className="travelCardList">

                    {responseTravels.rides.map((ride) => (

                        <TravelCard key={ride.id} ride={ride}/>
                    ))}

                    </div>
                </>
            )}
      </div>
    </div>
);
}

export default Travels;