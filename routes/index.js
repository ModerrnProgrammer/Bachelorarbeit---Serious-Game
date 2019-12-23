var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
   res.redirect('/start');
});

router.get('/game', function(req, res, next) {
    res.sendFile('/Users/moritz/WebstormProjects/bachelorarbeit/public/html/index.html');
    //res.sendFile('C:\\Users\\rohde\\WebstormProjects\\Games\\public\\html\\index.html');
});

router.get('/start', function(req, res, next) {
    //res.sendFile('C:\\Users\\rohde\\WebstormProjects\\Games\\public\\html\\start.html');
    res.sendFile('/Users/moritz/WebstormProjects/bachelorarbeit/public/html/start.html');
});

router.get('/players', function(req, res, next) {
    //res.sendFile('C:\\Users\\rohde\\WebstormProjects\\Games\\public\\html\\players.html');
    res.sendFile('/Users/moritz/WebstormProjects/bachelorarbeit/public/html/players.html');
});
module.exports = router;

