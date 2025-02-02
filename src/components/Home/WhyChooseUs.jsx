// import React from "react";
import { FaMoneyBillWave, FaClock, FaLeaf } from "react-icons/fa";
import laundryImage from "../../assets/images/black.png"; // Pastikan path gambar sesuai

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-12">
          Kenapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="flex justify-center">
            <img
              src={laundryImage}
              alt="Dolphin Laundry"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* Deskripsi dan Ikon */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaMoneyBillWave size={30} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-500">
                    Harga Terjangkau
                  </h3>
                  <p className="text-gray-600">
                    Kami menawarkan tarif yang kompetitif untuk semua layanan
                    kami.
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaClock size={30} className="text-yellow-500 animate-spin" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-500">
                    Proses Cepat
                  </h3>
                  <p className="text-gray-600">
                    Dapatkan pakaian Anda kembali dalam waktu singkat.
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaLeaf size={30} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-500">
                    Ramah Lingkungan
                  </h3>
                  <p className="text-gray-600">
                    Kami peduli dengan lingkungan sebanyak yang Anda lakukan.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
