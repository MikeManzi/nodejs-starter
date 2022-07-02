const express = require('express')
const { login, signup } = require('../controllers/user.controller')
const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     tags:
 *       - User
 *     description: Signup
 *     parameters:
 *       - name: body
 *         description: Fields for user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: OK
 */
router.route('/api/users/register').post(signup)

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login
 *     parameters:
 *       - name: body
 *         description: Fields for user
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *           required:
 *              - email   
 *              - password
 *     responses:
 *       200:
 *         description: OK
 */
router.route('/api/users/login').post(login)

module.exports = router