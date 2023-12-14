const {Router} = require('express')
const userRouter = require ('./users.routes')
const dishesRoutes = require ('./dishes.routes')
const sessionsRoutes = require ('./session.routes')
const ordersRouter = require('./ordens.routes')

const routes = Router();
routes.use ('/user', userRouter);
routes.use ('/sessions', sessionsRoutes);
routes.use ('/dishes', dishesRoutes);
routes.use ('ordens', ordersRouter);


module.exports = routes;