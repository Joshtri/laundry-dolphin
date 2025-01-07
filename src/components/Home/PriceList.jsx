import React, { useState } from "react";
import { FaCheckCircle, FaWater, FaBolt, FaLeaf, FaTshirt, FaListAlt } from "react-icons/fa";

const Pricelist = () => {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const pricelist = [
    {
      category: "Reguler",
      icon: <FaWater />,
      description: "Paket reguler dengan harga terjangkau untuk kebutuhan laundry sehari-hari.",
      items: [
        { name: "Laundry", price: "Rp 12.000 / Kg (di bawah 10 Kg)" },
        { name: "Paket Hemat", price: "Rp 11.000 / Kg (di atas 10 Kg)" },
      ],
    },
    {
      category: "Express",
      icon: <FaBolt />,
      description: "Layanan cepat untuk Anda yang membutuhkan hasil segera.",
      items: [
        { name: "Express", price: "Rp 25.000 / Kg (24 Jam)" },
        { name: "Super Express", price: "Rp 35.000 / Kg (12 Jam)" },
        { name: "Super Duper Express", price: "Rp 45.000 / Kg (3 Jam)" },
      ],
    },
    {
      category: "Layanan Khusus",
      icon: <FaLeaf />,
      description: "Paket spesial untuk kebutuhan tertentu seperti setrika saja atau laundry khusus.",
      items: [
        { name: "Setrika Saja", price: "Rp 9.000 / Kg" },
        { name: "Cuci Lembab", price: "Rp 6.500 / Kg" },
        { name: "Cuci Lipat", price: "Rp 9.000 / Kg" },
        { name: "Setrika Antri", price: "Rp 11.000 / Kg" },
        { name: "Laundry Khusus", price: "Rp 20.000 / Pcs" },
      ],
    },
    {
      category: "Dry Clean",
      icon: <FaTshirt />,
      description: "Layanan dry clean untuk pakaian formal dan bahan khusus.",
      items: [
        { name: "Jas Panjang", price: "Rp 50.000 / Pcs" },
        { name: "Celana Panjang", price: "Rp 45.000 / Pcs" },
        { name: "Kemeja Panjang", price: "Rp 45.000 / Pcs" },
        { name: "Kemeja Pendek", price: "Rp 40.000 / Pcs" },
        { name: "Jaket", price: "Rp 50.000 / Pcs" },
        { name: "Rok Pendek", price: "Rp 40.000 / Pcs" },
        { name: "Rok Panjang", price: "Rp 45.000 / Pcs" },
        { name: "Tensun Pendek", price: "Rp 40.000 / Pcs" },
        { name: "Tensun Panjang", price: "Rp 50.000 / Pcs" },
      ],
    },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-20 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-500 mb-10">
        Daftar Harga & Layanan
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white ${
            activeCategory === "Show All"
              ? "bg-blue-500"
              : "bg-gray-300 hover:bg-blue-400"
          } transition duration-300`}
          onClick={() => handleCategoryChange("Show All")}
        >
          <FaListAlt />
          <span>Show All</span>
        </button>
        {pricelist.map((category, index) => (
          <button
            key={index}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white ${
              activeCategory === category.category
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-blue-400"
            } transition duration-300`}
            onClick={() => handleCategoryChange(category.category)}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.category}</span>
          </button>
        ))}
      </div>

      {/* Pricelist Items */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-2xl">
          <div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            style={{ margin: "0 auto" }}
          >
            {pricelist
              .filter(
                (category) =>
                  activeCategory === "Show All" || category.category === activeCategory
              )
              .map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-500 mb-2 text-center">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center border-b border-gray-200 pb-2"
                      >
                        <span className="text-gray-600 font-medium">
                          {item.name}
                        </span>
                        <span className="text-yellow-500 font-semibold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricelist;
