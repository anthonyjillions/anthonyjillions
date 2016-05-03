/* eslint consistent-return:0 */

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const logger = require('./logger');
const ngrok = require('ngrok');
const frontend = require('./middlewares/frontendMiddleware');


const contactController = require('./controllers/contact');

const isDev = process.env.NODE_ENV !== 'production';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.post('/api/contact', contactController.postContact);
// Initialize frontend middleware that will serve app
const webpackConfig = isDev
  ? require('../internals/webpack/webpack.dev.babel')
  : require('../internals/webpack/webpack.prod.babel');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 5000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err);
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
