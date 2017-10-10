const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticles);
router.put('/blog/:id', ctrlBlog.editArticles);
router.delete('/blog/:id', ctrlBlog.deleteArticles);

const ctrlSkill = require('../controllers/skill');

router.get('/skill', ctrlSkill.getSkills);
router.post('/skill', ctrlSkill.createSkills);
router.put('/skill/:id', ctrlSkill.editSkills);
router.delete('/skill/:id', ctrlSkill.deleteSkills);

module.exports = router;