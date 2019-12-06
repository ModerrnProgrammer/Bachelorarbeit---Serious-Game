var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('C:\\Users\\rohde\\WebstormProjects\\Games\\public\\html\\index.html');
});

router.get('/start', function(req, res, next) {
    res.sendFile('C:\\Users\\rohde\\WebstormProjects\\Games\\public\\html\\start.html');
});
module.exports = router;

