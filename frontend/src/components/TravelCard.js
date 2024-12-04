import React from "react";

export const TravelCard = ({ ride }) => {
    const { id, origin, destination, distance, duration, value, date, driver: { name } } = ride;

    const dateObj = new Date(date);

    const SplitDate = dateObj.toISOString().split('T')[0];
    const SplitTime = dateObj.toISOString().split('T')[1].split('.')[0];

  return (
    <div className="driverCard">
          <h4>Travel {id}</h4>
          <p>Motorista: {name}</p>
          <p>Origem: {origin}</p>
          <p>Destino: {destination}</p>
          <p>Distancia: {distance / 1000}km</p>
          <p>Duração: {Math.floor(parseInt(duration) / 60)} minutos</p>
          <h5>Valor final da corrida: {value}</h5>
          <p>Dia: {SplitDate}</p>
          <p>Hora: {SplitTime}</p>
    </div>
  );
};