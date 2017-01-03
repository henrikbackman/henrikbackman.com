const express = require('express'),
      router = express.Router(),
      config = require('./../app/config')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: config.title, data: config });
});

module.exports = router;
