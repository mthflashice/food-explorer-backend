const {Router, response} = require('express');
const UserController = require('../controllers/UsersController')
const userRoutes = Router();

const usersController = new UserController();

userRoutes.post('/', usersController.create);

module.exports = userRoutes;
