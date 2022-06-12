const express = require('express')
const { login, signup } = require('../controllers/user.controller')
const router = express.Router({ mergeParams: true })

router.route('/api/users/register').post(signup)
router.route('/api/users/login').post(login)

module.exports = router