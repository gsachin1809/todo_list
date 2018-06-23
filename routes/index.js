var express = require('express');
var router = express.Router();

var ListController = require(__dirname+'/../app/https/controllers/ListController.js');

router.get('/admin/list',ListController.index)
router.post('/admin/list',ListController.store)
router.get('/admin/list/:id',ListController.show)
router.put('/admin/list/:id',ListController.destroy)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('app');
});



module.exports = router;
