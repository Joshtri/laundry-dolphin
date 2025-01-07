// import React from "react";
import { MdLocationOn, MdMap } from "react-icons/md";
import LdImage from '../../assets/images/front-ld.jpg';
import { useNavigate } from "react-router-dom";
const Location = () => {
    const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
          Lokasi Dolphin Laundry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lokasi Detail */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-x-4">
            <img
              src={LdImage} // Ganti dengan URL gambar Anda
              alt="Lokasi Dolphin Laundry"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="mt-4 md:mt-0 md:ml-6">
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-4xl text-green-500" />
                <h3 className="text-lg font-semibold">Rincian Lokasi</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Jl. RW Monginsidi 3 NO 28, Kupang
                <br />
                Dolphin Laundry & Dry Cleaning berada di tempat strategis yang
                berada di sekitaran pemukiman warga.
              </p>
              <p className="mt-4 font-semibold">Jam Buka: 05.45 AM - 22.00 PM</p>
              <button className="mt-4 bg-yellow-400 px-4 py-2 rounded text-white hover:bg-yellow-500">
                <a href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6">
                    Ke Lokasi Laundry
                </a>
              </button>
            </div>
          </div>

          {/* Detail Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <MdMap className="text-3xl text-green-500" />
              <h3 className="text-lg font-semibold">Detail Map</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Kami menyediakan Lokasi Map Dolphin Laundry apabila ada yang ingin
              melakukan pemesanan laundry secara langsung di tempatnya serta
              memberikan informasi kepada pengunjung web yang belum tahu lokasi
              Dolphin Laundry.
            </p>
            <iframe
              className="mt-4 w-full h-64 rounded shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.289388707983!2d123.60522407433285!3d-10.157115809599961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569cc81f3ca8f9%3A0x5a7a632a6da5a80c!2sDOLPHIN%20LAUNDRY%20%26%20DRY%20CLEANING!5e0!3m2!1sen!2sid!4v1683602919145!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="mt-4 font-semibold">Jam Buka: 05.45 AM - 22.00 PM</p>
            <button className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
                <a href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6" target="_blank">
                    Ke Lokasi Laundry
                </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
