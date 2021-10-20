var express = require('express');
var router = express.Router();
const crown2Controller_46 = require('../controllers/crown2Controller_46')

/* GET home page. */
router.get('/',crown2Controller_46.getCategories);

module.exports = router;
