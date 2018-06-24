var express = require('express');
var router = express.Router();

var ListController = require(__dirname+'/../app/https/controllers/ListController.js');

router.get('/api/v1/list',ListController.index)
router.post('/api/v1/list',ListController.store)
router.get('/api/v1/list/:id',ListController.show)
router.put('/api/v1/list/:id',ListController.destroy)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('app');
});



module.exports = router;
