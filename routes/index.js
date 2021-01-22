var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thanks', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});

router.get('/awards', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});

router.get('/work', function(req, res, next) {
  res.render('index4', { title: 'Express' });
});

router.get('/prize1', function(req, res, next) {
  res.render('sub1', { title: 'Express' });
});

router.get('/prize2', function(req, res, next) {
  res.render('sub2', { title: 'Express' });
});

router.get('/prize3', function(req, res, next) {
  res.render('sub3', { title: 'Express' });
});

router.get('/prize4', function(req, res, next) {
  res.render('sub4', { title: 'Express' });
});

router.get('/prize5', function(req, res, next) {
  res.render('sub5', { title: 'Express' });
});

router.get('/prize6', function(req, res, next) {
  res.render('sub6', { title: 'Express' });
});

router.get('/prize7', function(req, res, next) {
  res.render('sub7', { title: 'Express' });
});

router.get('/prize8', function(req, res, next) {
  res.render('sub8', { title: 'Express' });
});

module.exports = router;
