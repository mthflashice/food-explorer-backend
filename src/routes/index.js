const {Router} = require('express')
const userRouter = require ('./users.routes')
const dishesRoutes = require ('./dishes.routes')

const routes = Router();
routes.use ('/user', userRouter);

module.exports = routes;