import React from "react";
import serviceImg from "../src/assets/img_services.png";
import checkIcon from "../src/assets/check-icon.svg";
import styled from "styled-components";

const services = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

const OurServicesContainer = styled.section`
  max-width: 1200px;
`;
const OurServicesUl = styled.ul`
  list-style-type: none;
`;

const OurServicesSection = () => {
  return (
    <OurServicesContainer className="container-fluid py-5 px-lg-5">
      <div className="row align-items-center px-2 px-md-5">
        <div className="col-12 col-sm p-5 pe-lg-5 pb-5 pb-sm-0">
          <img
            style={{ width: "100%" }}
            className="our-service__img"
            src={serviceImg}
            alt="person"
          />
        </div>
        <div className="col-12 col-sm">
          <h2 className="pb-3">
            Best Car Rental for any kind of trip in Probolinggo!
          </h2>
          <p>
            Sewa mobil di Probolinggo bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <OurServicesUl className="our-service__ul">
            {services.map((service, index) => {
              return (
                <li key={index} className="d-flex align-items-center mb-3">
                  <img src={checkIcon} className="me-3"></img>
                  {service}
                </li>
              );
            })}
          </OurServicesUl>
        </div>
      </div>
    </OurServicesContainer>
  );
};

export default OurServicesSection;
