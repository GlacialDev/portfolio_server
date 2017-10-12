var path = require('path');

module.exports.getAdminMyWorks = function(req, res) {
  res.render('pages/admin', { title: 'Админка' , adress: 'my-works'});
}