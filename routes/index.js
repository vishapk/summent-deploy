var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// -------- Add This
// 1. * GET Test. */
router.post("/api", function(req, res) {
  res.json({summary : "Lets go"});
  console.log("Well Done");
});

module.exports = router;
