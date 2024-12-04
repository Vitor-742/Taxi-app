import React from "react";
import { confirmTravel } from '../services/api'
import { useNavigate } from "react-router-dom";

export const Card = ({ driver, travelInfo }) => {
  const navigate = useNavigate();

  const { description, name, review: { rating, comment }, value, vehicle } = driver;

  async function handleChooseTravel() {
    try {
      await confirmTravel(driver, travelInfo)
    } catch (error) {
      console.log(error)
    }
    

    navigate("/travels")
  }


  return (
    <div className="driverCard">
          <h4>{name}</h4>
          <p>{description}</p>
          <h5>Carro:</h5>
          <p>{vehicle}</p>
          <h5>Last review:</h5>
          <p>{rating}/5 - {comment}</p>
          <h5>Valor final da corrida:</h5>
          <p>{value.toFixed(2)}</p>
          <button
            onClick={handleChooseTravel}
          >Escolher</button>
    </div>
  );
};