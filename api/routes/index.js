const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticles);
router.put('/blog/:id', ctrlBlog.editArticles);
router.delete('/blog/:id', ctrlBlog.deleteArticles);

const ctrlSkill = require('../controllers/skill');

router.get('/get/skill', ctrlSkill.getSkills);
router.get('/delete/skill', ctrlSkill.deleteSkills);
router.post('/add/skill', ctrlSkill.createSkills);
router.put('/skill/:id', ctrlSkill.editSkills);

module.exports = router;