const express = require('express')
const router = express.Router()

const expressCallback = require('../expressCallback')
const { AuthController } = require('../controllers')
const verifyAccessToken = require('../middleware/verifyAccessToken')

router.post(
  '/individual/sign-up',
  expressCallback(AuthController.createIndividualAccount)
)
router.post(
  '/business/sign-up',
  expressCallback(AuthController.createBusinessAccount)
)

router.post(
  '/individual/sign-in',
  expressCallback(AuthController.authenticateIndividual)
)

router.post(
  '/business/sign-in',
  expressCallback(AuthController.authenticateBusiness)
)

router.get('/verify-token', expressCallback(AuthController.verifyAccessToken))

module.exports = router
