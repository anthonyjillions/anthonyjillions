const express = require('express');
const contactController = require('../controllers/contact');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  app.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
    console.log("worked");
  });

  app.post('/', (req) => {
    console.log("post" + req.body);
  });

  app.get('/contact', (req, res) => {
    res.json({ message: 'hooray! welcome to our contact!' });
    console.log("worked");
  });


  return app;
};
