var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function callPythonScript(req, res) {
      
  const { name } = req.body;

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
    console.log(`error:${data}`);
  });
  
}

// -------- Add This
// 1. * GET Test. */
router.post("/api", callPythonScript);

module.exports = router;
