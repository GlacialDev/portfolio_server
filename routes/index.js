var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/index.js');
const ctrlBlog = require('../controllers/blog.js');
const ctrlAbout = require('../controllers/about.js');
const ctrlWorks = require('../controllers/my-works.js');

router.get('/', ctrlIndex.getIndex);
router.get('/blog', ctrlBlog.getBlog);
router.get('/about', ctrlAbout.getAbout);
router.get('/my-works', ctrlWorks.getWorks);

module.exports = router;
