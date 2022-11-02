import React from "react";
import styled from "styled-components";
import GreenButton from "./GreenButton";

const CardContainer = styled.div`
  width: 31%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardImage = styled.img`
  width: 100%;
  margin-bottom: 3rem;
  object-fit: contain;
  aspect-ratio: 16/9;
`;
const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;
const Name = styled.p`
  font-weight: 500;
  margin-bottom: 0;
`;
const Card = ({ car }) => {
  return (
    <CardContainer className="shadow-sm p-3 rounded-3">
      <div>
        <CardImage src={car.image} alt="car" />
        <Name>{car.model}</Name>
        <Price className="price">{car.rentPerDay} / hari</Price>
        <p>{car.description}</p>
      </div>
      <div>
        <div className="d-flex align-items-center mb-3">
          <img src="../src/assets/fi_users.svg" className="me-3" />
          {car.capacity} orang
        </div>
        <div className="d-flex align-items-center mb-3">
          <img src="../src/assets/fi_settings.svg" className="me-3" />
          {car.transmission}
        </div>
        <div className="d-flex align-items-center mb-4">
          <img src="../src/assets/fi_calendar.svg" className="me-3" />
          {car.year}
        </div>
        <GreenButton style={{ width: "100%" }} element={"button"}>
          Pilih Mobil
        </GreenButton>
      </div>
    </CardContainer>
  );
};

export default Card;
