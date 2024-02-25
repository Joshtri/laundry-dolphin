const express = require("express");
const orderServices = require("../services/orderRender");
const orderController = require("../controllers/orderController");
const requireLogin = require('../middleware/auth');
const db = require("../database/connection");

const router = express.Router();

router.get("/order", requireLogin.NeedLogin, orderServices.orderRender);

// Mengatur route untuk mengambil data produk
router.get("/jenis_paket", (req, res) => {
  // const query = "SELECT * FROM jenis_paket";

  // db.query(query, (err, results) => {
  //   if (err) {
  //     console.error("Error fetching products:", err);
  //     res.status(500).json({ error: "Error fetching products" });
  //     return;
  //   }

  //   res.json(results);
  // });
});

// Mengatur route untuk mengambil data jenis pembayaran
router.get("/jenis_pembayaran", (req, res) => {
  // const query = "SELECT * FROM jenis_pembayaran";

  // db.query(query, (err, results) => {
  //   if (err) {
  //     console.error("Error fetching products:", err);
  //     res.status(500).json({ error: "Error fetching products" });
  //     return;
  //   }

  //   res.json(results);
  // });
});

// Mengatur route untuk mengambil data jenis pembayaran
router.get("/jenis_parfum", (req, res) => {
  // const query = "SELECT * FROM jenis_parfum";

  // db.query(query, (err, results) => {
  //   if (err) {
  //     console.error("Error fetching products:", err);
  //     res.status(500).json({ error: "Error fetching products" });
  //     return;
  //   }

  //   res.json(results);
  // });
});

// Mengatur route untuk mengambil data produk
router.post("/order_laundry", (req, res) => {
  // const orderLaundry = {
  //   alamat_pengambilan: req.body.alamat_pengambilan,
  //   jenis_paket: req.body.jenis_paket,
  //   nama_parfum: req.body.nama_parfum,
  //   metode_pembayaran: req.body.metode_pembayaran,
  //   email_costumer: req.body.email_costumer,
  //   catatan: req.body.catatan,
  // };

  // const sql = "INSERT INTO transaksi SET ?";

  // db.query(sql, orderLaundry, (err, results) => {
  //   if (err) {
  //     throw err;
  //   } else if (!err) {
  //     // res.send("JADI NIH");
  //     res.render("order",
  //      { 
  //         errorMessage: "Order Telah Terkirim",
  //         username:req.body.username
  //     });
  //   }
  // });
});

module.exports = router;
