import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const btnStyle = `
background-color: var(--lime-green-04);
font-weight: 700;
color: white !important;
border-color: var(--lime-green-04);
padding: 8px 12px;
border-radius: 2px;
`;

// @ts-ignore
const StyledBtn = styled.button`
  ${btnStyle}
`;

const StyledLink = styled(Link)`
  ${btnStyle}
`;

let GreenButton = ({ children, element, ...props }) => {
  return element === "button" ? (
    <StyledBtn className="btn btn-success text-nowrap" {...props}>
      {children}
    </StyledBtn>
  ) : element === "a" ? (
    <StyledLink
      className="btn btn-success text-nowrap"
      role={"button"}
      to={props.href}
    >
      {children}
    </StyledLink>
  ) : null;
};

GreenButton.propTypes = {
  element: PropTypes.oneOf(["button", "a"]),
};
export default GreenButton;
