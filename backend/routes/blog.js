const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog');

router.get('/', blogCtrl.getAllPosts);

module.exports = router;