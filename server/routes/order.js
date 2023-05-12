const express = require('express');
const orderServices = require('../services/orderRender');
const orderController = require('../controllers/orderController');
const db = require('../database/connection');

const router = express.Router();


router.get('/order', orderServices.orderRender);

// Mengatur route untuk mengambil data produk
router.get('/jenis_paket', (req, res) => {
    const query = 'SELECT * FROM jenis_paket';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Error fetching products' });
        return;
      }
  
      res.json(results);
    });
  });



module.exports = router;