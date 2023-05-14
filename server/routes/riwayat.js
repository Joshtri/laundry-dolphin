const express = require("express");
const riwayatServices = require("../services/riwayatRender");
// const riwayatController = require("../controllers/orderController");
const db = require("../database/connection");

const router = express.Router();


router.get('/riwayat_order', riwayatServices.riwayatRender);


module.exports = router;