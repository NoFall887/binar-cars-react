import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const ArrowBtn = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-light py-3 btn-lg rounded-circle d-flex justify-content-center align-items-center"
    >
      <img
        src={`../src/assets/${
          direction === "left" ? "arrow prev.svg" : "arrow next.svg"
        }`}
      ></img>
    </button>
  );
};

const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const CarouselItemContainer = styled.div`
  background-color: var(--hero-navbar-background);
  padding: 69px 46px;
  text-align: left;
`;

const Testimony = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  function next() {
    setCurrentSlide(currentSlide + 1);
  }
  function prev() {
    setCurrentSlide(currentSlide - 1);
  }
  function updateCurrentSlide(index) {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  }
  return (
    <section className="py-5 mb-sm-5" id="testimonials">
      <h2 className="text-center mb-3">Testimonial</h2>
      <p className="text-center mb-5">
        Berbagai review positif dari para pelanggan kami
      </p>
      <Carousel
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable
        emulateTouch
        centerSlidePercentage={60}
        swipeScrollTolerance={2}
        centerMode
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
      >
        {Array.from({ length: 4 }).map((_, id) => {
          return (
            <CarouselItemContainer
              key={id}
              className="d-flex mx-3 flex-column flex-sm-row align-items-center rounded-3 shadow-sm"
            >
              <img
                src="../src/assets/img_photo (1).png"
                alt="user photo"
                style={{ width: "80px" }}
                className="me-0 mb-4 mb-sm-0 me-sm-5"
              />
              <div>
                <div className="d-flex justify-content-center justify-content-sm-start mb-4 mb-sm-2">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    return (
                      <img
                        key={idx}
                        style={{ width: "16px" }}
                        src="../src/assets/Star 1.svg"
                        className="carousel__star"
                      ></img>
                    );
                  })}
                </div>
                <p className="mb-2">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <UserName className="mb-0">John Dee 32, Bromo</UserName>
              </div>
            </CarouselItemContainer>
          );
        })}
      </Carousel>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <ArrowBtn onClick={prev} direction={"left"} />
        <ArrowBtn onClick={next} direction={"right"} />
      </div>
    </section>
  );
};

export default Testimony;
