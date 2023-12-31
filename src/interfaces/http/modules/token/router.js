const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  postUseCase,
  logger,
  response: { Success, Fail }
}) => {
  const router = Router()

  /**
   * @swagger
   * definitions:
   * auth:
   *  properties:
   *    email:
   *      type: string
   *    password:
   *      type: string
   */

  /**
   * @swagger
   * /token:
   *  post:
   *    tags:
   *      - Authentication
   *    description: Authenticate
   *    consumes:
   *      - application/json
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: body
   *        description: User's credentials
   *        in: body
   *        required: true
   *        type: string
   *        schema:
   *          $ref: '#/definitions/auth'
   *    response:
   *      200:
   *        description: Successfully login
   *      400:
   *        $ref: '#/responses/BadRequest'
   */
  router
    .post('/', (request, response) => {
      postUseCase
        .validate({
          body: request.body
        })
        .then(data => {
          response
            .status(Status.OK)
            .json(Success(data))
        })
        .catch((error) => {
          logger.error(error)
          response
            .status(Status.BAD_REQUEST)
            .json(Fail(error.message))
        })
    })

    return router
}
