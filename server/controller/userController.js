const { User, Item, Category, Ingredient } = require('../models')
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');


class UserController {

  //? get all the items
  static async getItems(req, res, next) {
    try {
      let data = await Item.findAll({
        include: [Category, User],
        order: [
          ['id', 'ASC'],
        ],
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  //? get one item
  static async getItemById(req, res, next) {
    try {
      let data = await Item.findByPk(req.params.id, {
        include: [Category, User, Ingredient]
      })

      if (!data) throw { name: "Item not found" }

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}


module.exports = UserController