var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/index.js');
const ctrlBlog = require('../controllers/blog.js');
const ctrlAbout = require('../controllers/about.js');
const ctrlWorks = require('../controllers/my-works.js');
const ctrlAdmin = require('../controllers/admin.js');
const ctrlAdminAbout = require('../controllers/admin-about.js');
const ctrlAdminMyWorks = require('../controllers/admin-my-works.js');
const ctrlAdminBlog = require('../controllers/admin-blog.js');

router.get('/', ctrlIndex.getIndex);
router.get('/blog', ctrlBlog.getBlog);
router.get('/about', ctrlAbout.getAbout);
router.get('/my-works', ctrlWorks.getWorks);

router.get('/admin', ctrlAdmin.getAdmin);

router.get('/admin-about', ctrlAdminAbout.getAdminAbout);
router.post('/admin-about', ctrlAdminAbout.addSkill);
router.delete('/admin-about', ctrlAdminAbout.removeSkill);

router.get('/admin-my-works', ctrlAdminMyWorks.getAdminMyWorks);

router.get('/admin-blog', ctrlAdminBlog.getAdminBlog);
router.post('/admin-blog', ctrlAdminBlog.postArticle);

module.exports = router;
