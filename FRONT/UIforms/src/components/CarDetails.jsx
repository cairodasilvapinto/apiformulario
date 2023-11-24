import React from "react";

const CarDetails = ({ car }) => {
  return (
    <div>
      <h1>{car.brand} {car.model}</h1>
      <img src={car.image} alt={`${car.brand} ${car.model}`} />
      <p>Preço: ${car.price}</p>
    </div>
  );
};

export default CarDetails;
