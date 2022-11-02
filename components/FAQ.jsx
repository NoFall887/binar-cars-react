import React from "react";
import styled from "styled-components";

const FAQData = [
  {
    question: "Apa saja syarat yang dibutuhkan?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, est inventore voluptatem sed facilis consequatur! Excepturi vel ex at blanditiis debitis. Enim molestiae ratione, inventore dolorem atque similique deleniti vero.",
  },
  {
    question: "Berapa hari minimal sewa mobil lepas kunci?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, est inventore voluptatem sed facilis consequatur! Excepturi vel ex at blanditiis debitis. Enim molestiae ratione, inventore dolorem atque similique deleniti vero.",
  },
  {
    question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, est inventore voluptatem sed facilis consequatur! Excepturi vel ex at blanditiis debitis. Enim molestiae ratione, inventore dolorem atque similique deleniti vero.",
  },
  {
    question: "Apakah Ada biaya antar-jemput?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, est inventore voluptatem sed facilis consequatur! Excepturi vel ex at blanditiis debitis. Enim molestiae ratione, inventore dolorem atque similique deleniti vero.",
  },
  {
    question: "Bagaimana jika terjadi kecelakaan?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, est inventore voluptatem sed facilis consequatur! Excepturi vel ex at blanditiis debitis. Enim molestiae ratione, inventore dolorem atque similique deleniti vero.",
  },
];

const AccordionItem = styled.div`
  margin-bottom: 16px;
  border-radius: 4px;
  border-top: 1px solid #d4d4d4 !important;
`;

const FAQ = () => {
  return (
    <section className="py-5 mb-sm-5 container-fluid px-4 px-md-5" id="faq">
      <div className="row">
        <div className="col-12 text-center text-sm-start pb-4 pb-sm-0 col-sm-5 ">
          <h2 className="mb-3">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="accordion col-12 col-sm-7" id="accordionExample">
          {FAQData.map((data, key) => {
            return (
              <AccordionItem className="accordion-item" key={key}>
                <h3 className="accordion-header" id={"heading" + key}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    style={{ borderRadius: "4px" }}
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + key}
                    aria-expanded="false"
                    aria-controls={"collapse" + key}
                  >
                    {data.question}
                  </button>
                </h3>
                <div
                  id={"collapse" + key}
                  className="accordion-collapse collapse"
                  aria-labelledby={"heading" + key}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{data.answer}</div>
                </div>
              </AccordionItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
