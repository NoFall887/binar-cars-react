import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { carsInitAction } from "../actions";

const SearchResult = styled.section`
  gap: 1.5rem;
  max-width: 1047px;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 6rem;
  justify-content: center;
  @media (max-width: 1080px) {
    margin-top: 112px;
  }

  @media (max-width: 992px) {
    margin-top: 174px;
  }

  @media (max-width: 768px) {
    margin-top: 244px;
  }
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Cars = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const cars = useSelector((state) => state.filteredCars);
  console.log(cars);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then((result) => {
        let data = result.data;
        data = data.map((car) => {
          const isPositive = getRandomInt(0, 1) === 1;
          const timeAt = new Date();
          const mutator = getRandomInt(1000000, 100000000);
          const availableAt = new Date(
            timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
          ).toISOString();

          return {
            ...car,
            availableAt,
          };
        });
        dispatch(carsInitAction(data));
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchResult className="d-flex">
        {cars.map((car, index) => {
          return <Card car={car} key={index} />;
        })}
      </SearchResult>
      <Footer />
    </>
  );
};

export default Cars;
