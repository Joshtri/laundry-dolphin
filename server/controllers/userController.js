const db = require('../database/connection');
const bcrypt = require("bcrypt");

exports.login_user = (req,res) =>{

};


exports.register_user = (req,res) =>{
    // Handle sign up requests
app.post('/signup', async (req, res) => {
    const { nama_lengkap, nomor_telepon, password, alamat_email} = req.body;
  
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Insert user into database
    const query = 'INSERT INTO users_web (nama_lengkap, nomor_telepon, password, alamat_email) VALUES (?, ?, ?, ?)';
    db.query(query, [nama_lengkap, nomor_telepon, hashedPassword, alamat_email], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Sign up successful');
      }
    });
  });
};  