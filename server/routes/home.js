const express = require("express");
// const router = express();
const router = express.Router();
const homeServices = require("../services/homeRender");
const homeController = require("../controllers/userController");

const requireLogin = require("../middleware/auth");

const session = require('express-session');

const orderServices = require("../services/orderRender");
const orderController = require("../controllers/orderController");

const bcrypt = require("bcrypt");
const db = require("../database/connection");
const saltRounds = 10;

// Middleware session
router.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 240000 } // Session expires in 1 minute (adjust as needed)
}));


//DEFAULT
router.get("/header", homeServices.headerRender);
router.get("/home", homeServices.homeRender);



//login USER INSIDE HOME.
// Rute untuk memproses login
router.post("/logins", (req, res) => {
  const { username, password } = req.body;

  const myData = {
    profile: `            <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>

    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
        <li><a class="dropdown-item" href="/riwayat_order">Riwayat Pemesanan</a></li>

        <li><a class="dropdown-item" href="#">Notifikasi</a></li>

        <li><a class="dropdown-item" href="/logins">Order</a></li>

        <li><a class="dropdown-item" href="/logout">Log Out</a></li>
    </ul>
</li>`,
  };
  

  // Lakukan validasi login dan periksa kecocokan dengan data di database
  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (error, results) => {
      if (error) {
        // Handle error
      } else {
        if (results.length > 0) {
          // Jika login berhasil, simpan ID pengguna ke sesi
          req.session.id_user = results[0].id;

          res.render("order",
          {
            data_identity:myData,
            id_user: req.session.id_user,
            errorMessage: null,
            username:username 

          });
        } else {
          // Jika login gagal, arahkan kembali ke halaman login dengan pesan error
          res.redirect("/home");
        }
      }
    }
  );
});

router.post("/signup", async (req, res) => {
  const { username, password, nama_lengkap, alamat_email, nomor_telepon } =
    req.body;

  // Insert user into database
  const query =
    "INSERT INTO user (username, password, nama_lengkap, alamat_email, nomor_telepon) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [username, password, nama_lengkap, alamat_email, nomor_telepon],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send("Sign up successful");
      }
    }
  );
});


// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/home');
});


module.exports = router;
