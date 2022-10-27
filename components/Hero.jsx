import React from "react";
import styled from "styled-components";
import GreenButton from "./GreenButton";
import car from "/src/assets/mercedes.png";

const HeroContainer = styled.section`
  background-color: var(--hero-navbar-background);
`;
const HeroText = styled.p`
  max-width: 568px;
`;
const CarImg = styled.img`
  width: 100%;
  position: relative;
  z-index: 1;
`;
const CarImgContainer = styled.div`
  &:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 60px 0 0;
    bottom: 0;
    background: var(--dark-blue-04);
    width: 100%;
    height: 60%;
  }
`;

const Hero = () => {
  return (
    <HeroContainer className="hero container-fluid">
      <div className="row pt-3 align-items-center">
        <div className="col-12 px-4 px-sm-0 col-sm ms-sm-4 ms-md-5 mb-4">
          <h1 className="mb-3">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <HeroText className="mb-3">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </HeroText>
          <GreenButton type={"a"} href="#">
            Mulai Sewa Mobil
          </GreenButton>
        </div>
        <CarImgContainer className="col-12 col-sm position-relative overflow-hidden">
          <CarImg src={car} alt="mercedes car" />
        </CarImgContainer>
      </div>
    </HeroContainer>
  );
};

export default Hero;
