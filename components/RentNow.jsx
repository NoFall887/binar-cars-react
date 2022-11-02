import React from "react";
import styled from "styled-components";
import GreenButton from "./GreenButton";

const RentNowContainer = styled.div`
  background-color: var(--dark-blue-04);
  max-width: 1136px;
  padding: 64px;
  & * {
    color: white;
    margin: auto;
  }
`;

const RentNow = () => {
  return (
    <section className="py-5 mb-sm-5 container-fluid px-4">
      <RentNowContainer className="text-center m-auto rounded-4">
        <h2 className="mb-4" style={{ fontSize: "36px" }}>
          Sewa Mobil di Probolinggo Sekarang
        </h2>
        <p className="mb-5" style={{ maxWidth: "468px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <GreenButton element={"a"} href="#">
          Mulai Sewa Mobil
        </GreenButton>
      </RentNowContainer>
    </section>
  );
};

export default RentNow;
