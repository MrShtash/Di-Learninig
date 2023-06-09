const express = require('express');

const router = express.Router();

const{_home , _search , _search_title, _search_category} = require('../controllers/rss.js')

router.get('/', _home)
router.get('/home', _home)
router.get('/search', _search);
router.get('/search/title', _search_title);
router.get('/search/category', _search_category);

module.exports = {
    router
}