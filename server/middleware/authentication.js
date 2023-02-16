let { decodeToken } = require('../helpers/jwt');
let { User } = require('../models');

const authentication = async (req, res, next) => {
  try {
    let { access_token } = req.headers
    if (!access_token) throw { name: "Invalid Token" }

    let payload = decodeToken(access_token)

    let user = await User.findByPk(payload.id)

    req.user = { id: user.id }

    if (!user) throw { name: "Invalid Token" }




    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication