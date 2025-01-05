import React from "react";
import { FaMoneyBillWave, FaClock, FaLeaf } from "react-icons/fa";
import "../../assets/css/bubble.css"; // Pastikan Anda membuat file ini di folder CSS Anda
import '../../assets/css/clock.css';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-100 text-center">
      <h2 className="text-3xl font-bold text-blue-500 animate-fade-in">
        Mengapa Memilih Kami?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="p-4 bg-blue-100 rounded-full mx-auto animate-pulse w-max">
            <FaMoneyBillWave size={40} className="text-yellow-500" />
          </div>
          <h3 className="text-xl font-bold mt-4">Harga Terjangkau</h3>
          <p className="mt-2 text-gray-600">
            Kami menawarkan tarif yang kompetitif untuk semua layanan kami.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="p-4 bg-blue-100 rounded-full mx-auto w-max">
            <FaClock size={40} className="text-yellow-500 animate-spin" />
          </div>
          <h3 className="text-xl font-bold mt-4">Proses Cepat</h3>
          <p className="mt-2 text-gray-600">
            Dapatkan pakaian Anda kembali dalam waktu singkat.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="p-4 bg-blue-100 rounded-full mx-auto animate-pulse w-max">
            <FaLeaf size={40} className="text-yellow-500" />
          </div>
          <h3 className="text-xl font-bold mt-4">Ramah Lingkungan</h3>
          <p className="mt-2 text-gray-600">
            Kami peduli dengan lingkungan sebanyak yang Anda lakukan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
