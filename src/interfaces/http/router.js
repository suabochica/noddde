const statusMonitor = require('express-status-monitor');
const cors = require('cors')
const bodyParser = require('body-parser');
const compression = require('compression')

const { Router } = require('express');
const { partialRight } = require('ramda');

const controller = require('./utils/create_controller');
const httpLogger = require('./middlewares/http_logger');
const errorHandler = require('./middlewares/error_handler');

module.exports = ({ config, logger, database }) => {
  const router = Router();

  if (config.env === 'development') {
    router.use(statusMonitor)
  }

  const apiRouter = Router();

  apiRouter
    .use(cors({
      origin: [
        'http://localhost:3000'
      ],
      methods: ['GET'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
    .use(bodyParser.json())
    .use(compression());

  apiRouter.use('/', controller('index'));
  apiRouter.use('/users', controller('user').router);

  router.use(`/api/${config.version}`, apiRouter);
  router.use(partialRight(errorHandler, [logger, config]));

  return router;
}
