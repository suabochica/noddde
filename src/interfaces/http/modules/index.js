const swaggerJSDoc = require('swagger-jsdoc');
const Status = require('http-status');
const { Router } = require('express');

module.exports = () => {
  const router = Router();

  const swaggerDefinition = {
    info: {
      title: 'Node DDD API Explorer',
      version: '1.0.0',
      description: 'Available REST Endpoints of noddde RESTful API'
    },
    host: `${process.env.API_SWAGGER}:${process.env.PORT}/api/${process.env.APP_VERSION}`,
    basePath: '/',
    securityDefinitions: {
      JWT: {
        description: '',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  }

  const swaggerOptions = {
    swaggerDefinition: swaggerDefinition,
    apis: ['src/interfaces/http/modules/**/*.js']
  }

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  /**
   * @swagger
   * responses:
   *  Unauthorized:
   *    description: Unauthorized
   *  BadRequest:
   *    description: BadRequest / Invalid Input
   */

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Status
   *     description: Returns API status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: API Status
   */
  router.get('/', (req, res) => {
    res
      .status(Status.OK)
      .json({status: 'API working'})
  });

  router.get('/swagger.json', (req, res) => {
    res
      .status(Status.OK)
      .json(swaggerSpec)
  });

  return router;
}
