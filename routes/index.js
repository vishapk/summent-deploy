var express = require('express');
var Algorithmia= require("algorithmia");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function callPythonScript(req, res) {
      
  //const { name } = req.body;

  try{
  /*
    const {spawn} = require("child_process");
  console.log("\n\n\nBeginning Summarization\n\n\n\n");
    
  var python = spawn('python',["./scripts/inference.py",
      name] );

  python.stdout.on('data', (data) => {
    console.log("Completed Summarization");
    var summarizedP=data.toString();
    console.log(summarizedP);
    res.json({summary: summarizedP});
  } );
    
  python.stderr.on('data', (data) => {
    res.json( {summary : data.toString()} );
  });
  */
    Algorithmia.client("simI6AZVARfiyUQPGk4cz/A5gtE1")
    .algo("SakshiTantak/summarizer_inference/0.2.0?timeout=300")
    .pipe(input)
    .then(function(response){
      res.json({summary: response.toString()});
  });
}
catch(err)
{
  res.json({summary : err.toString()});
}
  
}

// -------- Add This
// 1. * GET Test. */
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
