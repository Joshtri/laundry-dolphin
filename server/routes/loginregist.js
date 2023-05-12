const express = require('express');
// const router = express();
const router = express.Router();
const loginRegistServices = require('../services/loginregisterRender');


router.get('/login', loginRegistServices.loginRegistRender);



module.exports = router;