var express = require('express');
var router = express.Router();
const apicrown2Controller_46 = require('../controllers/apicrown2Controller_46')

/* GET home page. */
router.get('/category_46',apicrown2Controller_46.getCategories);

module.exports = router;
