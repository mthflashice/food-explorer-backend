const {Router} = require('express')
const userRouter = require ('./users.routes')
const dishesRoutes = require ('./dishes.routes')
const sessionsRoutes = require ('./session.routes')
const ordersRouter = require('./orders.routes')
const favoritesRouter = require('./favorites.routes')
const cartsRouter = require('./carts.routes')


const routes = Router();
routes.use ('/user', userRouter);
routes.use ('/sessions', sessionsRoutes);
routes.use ('/dishes', dishesRoutes);
routes.use ('ordens', ordersRouter);
routes.use ('/favorites', favoritesRouter);
routes.use ('/carts', cartsRouter);



module.exports = routes;