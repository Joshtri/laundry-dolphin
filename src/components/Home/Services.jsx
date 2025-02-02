// import React from "react";
import { FaTshirt, FaSoap, FaHandSparkles } from "react-icons/fa";

const Services = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-500 animate-fade-in">
        Layanan Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <FaTshirt size={40} className="text-blue-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Laundry</h3>
          <p className="mt-2 text-gray-600">
            Pakaian bersih dan segar dalam waktu singkat!
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <FaSoap size={40} className="text-blue-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Dry Cleaning</h3>
          <p className="mt-2 text-gray-600">
            Perawatan profesional untuk kain-kain sensitif Anda.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <FaHandSparkles size={40} className="text-blue-500 mx-auto" />
          <h3 className="text-xl font-bold mt-4">Setrika</h3>
          <p className="mt-2 text-gray-600">
            Pakaian yang rapi untuk setiap kesempatan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
