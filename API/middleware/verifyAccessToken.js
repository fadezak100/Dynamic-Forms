const AuthHelper = require('../helpers/AuthHelpers')

const verifyAccessToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]

    const user = await AuthHelper.verifyToken(token)
    res.locals.user = user
    next()
  } catch (err) {
    res.status(401).json({ error: 'unauthorized' })
  }
}

module.exports = verifyAccessToken
