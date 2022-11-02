import React from "react";
import styled from "styled-components";

const bottomNavs = [
  { url: "#our-services", title: "Our services" },
  { url: "#why-us", title: "Why Us" },
  { url: "#testimonials", title: "Testimonials" },
  { url: "#faq", title: "FAQ" },
];
const contacts = [
  { img: "../src/assets/icon_facebook.svg", alt: "facebook" },
  { img: "../src/assets/icon_instagram.svg", alt: "instagram" },
  { img: "../src/assets/icon_twitter.svg", alt: "twitter" },
  { img: "../src/assets/icon_mail.svg", alt: "mail" },
  { img: "../src/assets/icon_twitch.svg", alt: "twitch" },
];

const BottomNav = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Footer = () => {
  return (
    <footer
      className="py-4 mb-5 container-fluid px-3 px-md-4"
      style={{ maxWidth: "1141px" }}
    >
      <div className="row flex-column flex-sm-row">
        <div className="col pb-3 pb-sm-0">
          <div className="mb-3">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </div>
          <div className="mb-3">binarcarrental@gmail.com</div>
          <div>081-233-334-808</div>
        </div>
        <div className="col">
          {bottomNavs.map((item, key) => {
            return (
              <BottomNav
                key={key}
                className="footer__link"
                href={item.url}
                style={{ display: "block" }}
              >
                {item.title}
              </BottomNav>
            );
          })}
        </div>

        <div className="col pb-3 pb-sm-0">
          <div className="mb-3">Connect with us</div>
          <div className="d-flex justify-content-start gap-3">
            {contacts.map((contact, key) => {
              return (
                <a href="#" key={key}>
                  <img src={contact.img} alt={contact.alt} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="col">
          <p className="mb-3">Copyright Binar 2022</p>
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
