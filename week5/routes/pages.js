const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/', authController.isLoggedIn, (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/', authController.isLoggedIn, (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/login', (req, res) => {
  res.render('login');
});

//  router.post('/login', authController.login);

module.exports = router;