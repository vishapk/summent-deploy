var express = require('express');
var Algorithmia= require("algorithmia");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// -------- Add This
// 1. * PUSH request from Front-end */
router.post("/api", function(req,res, next)
{
  const { name } = req.body;

  try{
  Algorithmia.client("simI6AZVARfiyUQPGk4cz/A5gtE1")
    .algo("SakshiTantak/summarizer_inference/0.2.0?timeout=300")
    .pipe(name)
    .then(function(response){
      console.log(response.result);
      res.json({summary: response.result.toString()});
  });
  }
  catch(err)
  {
    res.json({summary: err.toString()});
  }
});

module.exports = router;
