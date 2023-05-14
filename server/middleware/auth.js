// Middleware untuk memeriksa status login pengguna
exports.NeedLogin = (req, res, next) => {
  const { id_user } = req.session;

  if (id_user) {
    // Jika pengguna sudah login, lanjut ke rute berikutnya
    next();
  } else {
    // Jika pengguna belum login, arahkan ke halaman login
    res.redirect("/home");
  }
};
