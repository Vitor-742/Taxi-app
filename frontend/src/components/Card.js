import React from "react";
import { confirmTravel } from '../services/api'
import { useNavigate } from "react-router-dom";

export const Card = ({ driver, travelInfo }) => {
  const navigate = useNavigate();

  const { description, name, review: { rating, comment }, value, vehicle } = driver;

  async function handleChooseTravel() {
    const response = await confirmTravel(driver, travelInfo)

    navigate("/travels")
  }


  return (
    <div className="driverCard">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{vehicle}</p>
          <h5>Last review:</h5>
          <p>{rating}/5</p>
          <p>{comment}</p>
          <h5>Valor final da corrida:</h5>
          <p>{value}</p>
          <button
            onClick={handleChooseTravel}
          >Escolher</button>
    </div>
  );
};