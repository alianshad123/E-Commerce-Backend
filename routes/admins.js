const express  = require('express');
const router = express.Router();

const {getAdmin} = require('../controllers/admins');

router.route("/").get(getAdmin);

module.exports = router;