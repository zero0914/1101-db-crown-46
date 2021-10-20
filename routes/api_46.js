var express = require('express');
var router = express.Router();
const apiCrown2Controller_46 = require('../controllers/apiCrown2Controller_46')

/* GET home page. */
router.get('/category_46',apiCrown2Controller_46.getCategories);

module.exports = router;
