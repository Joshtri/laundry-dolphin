import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricelist = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "Rp 15.000",
      features: [
        "Cuci & Lipat",
        "Max 3kg",
        "Proses 2 Hari",
      ],
    },
    {
      name: "Premium Package",
      price: "Rp 30.000",
      features: [
        "Cuci, Lipat & Setrika",
        "Max 5kg",
        "Proses 1 Hari",
        "Pengambilan Gratis",
      ],
    },
    {
      name: "Express Package",
      price: "Rp 50.000",
      features: [
        "Cuci, Lipat & Setrika",
        "Max 5kg",
        "Selesai dalam 6 Jam",
        "Pengambilan & Antar Gratis",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-500 mb-10">Daftar Harga & Paket</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold text-blue-500">{pkg.name}</h3>
            <p className="text-4xl font-bold text-yellow-500 mt-4">{pkg.price}</p>
            <ul className="mt-6 space-y-2">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricelist;
