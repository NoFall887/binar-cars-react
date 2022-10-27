import React from "react";
import WhyUsCard from "./WhyUsCard";

const WhyUsItems = [
  {
    icon: "../src/assets/icon_complete.svg",
    title: "Mobil Lengkap",
    text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: "../src/assets/icon_price.svg",
    title: "Harga Murah",
    text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: "../src/assets/icon_24hrs.svg",
    title: "Layanan 24 Jam",
    text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: "../src/assets/icon_professional.svg",
    title: "Sopir Profesional",
    text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const WhyUs = () => {
  return (
    <section className="container-fluid py-5 mb-sm-5 px-4 px-md-5" id="why-us">
      <div className="text-center text-lg-start">
        <h2 className="mb-3">Why Us?</h2>
        <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
      </div>

      <div className="row gap-3 justify-content-center">
        {WhyUsItems.map((item, index) => {
          return (
            <WhyUsCard
              icon={item.icon}
              text={item.text}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
