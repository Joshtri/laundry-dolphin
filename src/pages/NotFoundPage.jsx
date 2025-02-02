// import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600 text-white">
      <div className="text-center p-6 md:p-12">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Halaman tidak ditemukan.</p>
        <Link to="/" className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          <FaHome className="mr-2" /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;