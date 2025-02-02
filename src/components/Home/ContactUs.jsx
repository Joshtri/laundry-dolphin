import  { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactItems = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500 text-3xl" />,
      options: [
        { label: "Nomor Pertama", link: "https://wa.me/+6281529500130" },
        { label: "Nomor Kedua", link: "https://wa.me/+6282144500030" },
      ],
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/your-username",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      link: "https://www.facebook.com/your-page",
    },
    {
      name: "Google Maps",
      icon: <FaMapMarkerAlt className="text-red-500 text-3xl" />,
      link: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsAppClick = (link) => {
    window.open(link, '_blank');
    closeModal();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Kontak Kami</h2>
        <p className="text-gray-600 mb-12">
          Hubungi kami melalui saluran berikut untuk layanan terbaik kami!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            item.name === "WhatsApp" ? (
              <button
                key={index}
                onClick={openModal}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-4 transition duration-300"
              >
                {item.icon}
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              </button>
            ) : (
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
            )
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-4">Pilih Nomor WhatsApp</h2>
              {contactItems[0].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(option.link)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full mb-2 flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  {option.label}
                </button>
              ))}
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center w-full transition duration-300"
                onClick={closeModal}
              >
                <FaTimes className="mr-2 text-lg" />
                Batal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactUs;