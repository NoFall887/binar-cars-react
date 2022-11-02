import React from "react";
import styled from "styled-components";
import GreenButton from "./GreenButton";

const NavContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Nav = styled.nav`
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: var(--hero-navbar-background);
`;

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg">
      <NavContainer className="container-fluid px-sm-5">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header px-4 py-4">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end gap-3 flex-grow-1 pe-3 ps-2">
              <li className="nav-item">
                <a className="nav-link" href="#our-services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <GreenButton href="#" element={"a"}>
                  Register
                </GreenButton>
              </li>
            </ul>
          </div>
        </div>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
