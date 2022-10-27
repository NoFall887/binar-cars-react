import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  background-color: var(--lime-green-04);
  font-weight: 700;
  color: white !important;
  border-color: var(--lime-green-04);
  padding: 8px 12px;
  border-radius: 2px;
`;

const StyledLink = styled(StyledBtn).attrs({
  as: "a",
})``;

let GreenButton = ({ children, type }) => {
  return type === "button" ? (
    <StyledBtn className="btn btn-success">{children}</StyledBtn>
  ) : type === "a" ? (
    <StyledLink className="btn btn-success" role={"button"}>
      {children}
    </StyledLink>
  ) : null;
};

GreenButton.propTypes = {
  type: PropTypes.oneOf(["button", "a"]),
};
export default GreenButton;
