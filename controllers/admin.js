var path = require('path');

module.exports.getAdmin = function(req, res) {
  res.render('pages/admin', { title: 'Админка'});
}
