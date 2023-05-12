const express = require('express');
// const router = express();
const router = express.Router();
const homeServices = require('../services/homeRender');
const homeController = require('../controllers/userController');
const bcrypt= require('bcrypt');
const db = require('../database/connection');
const saltRounds = 10;

//DEFAULT
router.get('/header', homeServices.headerRender);
router.get('/home', homeServices.homeRender);


//login USER INSIDE HOME.

// Handle login requests
router.post('/loginin', async (req, res) => {
    const { username, password } = req.body;
  
    // Retrieve user from database
    const query = 'SELECT * FROM user WHERE username = ?';
    db.query(query, [username], async (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else if (results.length === 0) {
        res.status(401).send('Invalid credentials');
      } else {
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });
  });


router.post('/signup', async (req, res) => {
    const { username,password,nama_lengkap,alamat_email, nomor_telepon} = req.body;
  
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Insert user into database
    const query = 'INSERT INTO user (username, password, nama_lengkap, alamat_email, nomor_telepon) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [username, hashedPassword, nama_lengkap, alamat_email, nomor_telepon], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Sign up successful');
      }
    });
  });


module.exports = router;