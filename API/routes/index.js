const router = require('express').Router()
const AuthRoute = require('./AuthRoute')

router.use('/auth', AuthRoute)

module.exports = router
