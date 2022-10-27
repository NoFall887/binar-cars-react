import React from "react";
import styled from "styled-components";

const WhyUsText = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const WhyUsCard = ({ icon, title, text }) => {
  return (
    <div className="card col-lg p-4">
      <img
        src={icon}
        className="mb-3"
        style={{
          width: "32px",
        }}
      ></img>
      <WhyUsText>{title}</WhyUsText>
      <p className="m-0">{text}</p>
    </div>
  );
};

export default WhyUsCard;
