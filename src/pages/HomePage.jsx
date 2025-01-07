import React from "react";
import Layout from "./Layout";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import Location from "../components/Home/Location";
import Pricelist from "../components/Home/PriceList";
import ContactUs from "../components/Home/ContactUs";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const HomePage = () => {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="pricelist">
        <Pricelist />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>

      <FloatingWhatsApp /> {/* Tambahkan komponen tombol WhatsApp */}

    </Layout>
  );
};

export default HomePage;
