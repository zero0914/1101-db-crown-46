var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_46', { title: 'Express', name: 'Nihao', id: '208417146' });
});

module.exports = router;
