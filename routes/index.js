const express = require('express');
const router = express.Router();

// GET Home
router.get('/', (req, res) => {
  res.render('home', { title: 'Home'});
});

// GET About
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me '});
});

// GET Projects
router.get('/projects', (req, res) => {
  res.render('projects', {title: 'Projects'})
});

// GET Services
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services'});
});

// GET Contract
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
