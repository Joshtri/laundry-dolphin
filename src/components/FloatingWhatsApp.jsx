// import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/<your-phone-number>?text=Halo%20Dolphin%20Laundry,%20saya%20ingin%20memesan%20layanan%20laundry"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
      aria-label="Hubungi kami via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
