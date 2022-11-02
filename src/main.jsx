import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { cars: [], filteredCars: [] };
const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cars/init":
      return {
        ...state,
        cars: action.payload,
        filteredCars: action.payload,
      };
    case "cars/filter":
      const payload = action.payload;
      const filtered = state.cars.filter((car) => {
        return (
          new Date(car.availableAt) >=
            new Date(`${payload.date} ${payload.time}`) &&
          car.capacity >= payload.passengers
        );
      });
      return {
        ...state,
        filteredCars: filtered,
      };
    default:
      break;
  }
  return state;
};

const store = configureStore({ reducer: carReducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
