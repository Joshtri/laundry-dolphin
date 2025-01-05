import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const contactItems = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500 text-3xl" />,
      link: "https://wa.me/<your-phone-number>",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/<your-username>",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      link: "https://www.facebook.com/<your-page>",
    },
    {
      name: "Google Maps",
      icon: <FaMapMarkerAlt className="text-red-500 text-3xl" />,
      link: "https://goo.gl/maps/<your-map-link>",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Kontak Kami</h2>
        <p className="text-gray-600 mb-12">
          Hubungi kami melalui saluran berikut untuk layanan terbaik kami!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-4 transition duration-300"
            >
              {item.icon}
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
