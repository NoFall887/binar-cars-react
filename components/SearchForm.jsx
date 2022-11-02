import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { carsFilterAction } from "../src/actions";
import GreenButton from "./GreenButton";

const FilterContainer = styled.form`
  max-width: 1047px;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: -15%;
  translate: -50%;
  left: 50%;
  background-color: white;
  z-index: 1;
  justify-content: center;

  & .btn-success {
    padding: 5px 12px;
  }
`;

const Input = styled.input`
  border-right: none;
`;

const InputLogo = styled.span`
  background-color: white;
  border-left: none;
`;

const SearchForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(0);

  const dispatch = useDispatch();

  function filter(e) {
    console.log("first");
    e.preventDefault();
    dispatch(carsFilterAction({ date, time, passengers }));
  }
  return (
    <FilterContainer
      id="filter"
      className="shadow row g-3 align-items-end p-3 rounded-4"
      onSubmit={filter}
    >
      <div className="col-6 col-md-3 col-lg">
        <label htmlFor="driver-type" className="form-label">
          Tipe Driver
        </label>
        <select
          className="form-select"
          aria-label="Tipe Driver"
          id="driver-type"
          defaultValue={""}
        >
          <option value={""} disabled>
            Pilih Tipe Driver
          </option>
          <option value="1">Tanpa Sopir (lepas kunci)</option>
          <option value="2">Dengan Sopir</option>
        </select>
      </div>
      <div className="col-6 col-md-3 col-lg">
        <label htmlFor="date" className="form-label">
          Tanggal
        </label>
        <div className="input-group">
          <Input
            type="date"
            className="form-control"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
          <InputLogo className="input-group-text">
            <img src="../src/assets/fi_calendar.svg" />
          </InputLogo>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg">
        <label htmlFor="penjem" className="form-label">
          Waktu Jemput/Ambil
        </label>
        <div className="input-group">
          <Input
            type="time"
            className="form-control"
            id="time"
            required
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <InputLogo className="input-group-text">
            <img src="../src/assets/fi_clock.svg" />
          </InputLogo>
        </div>
      </div>
      <div className="col-6 col-md-3 col-lg">
        <label htmlFor="jumlah-penumpang" className="form-label">
          Jumlah Penumpang (optional)
        </label>
        <div className="input-group">
          <Input
            type="number"
            className="form-control"
            id="passenger"
            min="1"
            required
            onChange={(e) => {
              setPassengers(parseInt(e.target.value));
            }}
          />
          <InputLogo className="input-group-text">
            <img src="../src/assets/fi_users_b.svg" />
          </InputLogo>
        </div>
      </div>
      <div className="col-3 col-lg flex-grow-0">
        <GreenButton element={"button"} type="submit">
          Cari Mobil
        </GreenButton>
      </div>
    </FilterContainer>
  );
};

export default SearchForm;
