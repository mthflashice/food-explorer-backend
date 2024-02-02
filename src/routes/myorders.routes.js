const {Router} = require('express');
const MyOrdersController = require('../controllers/MyOrdersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const myOrdersRoutes = Router();

const myOrdersController = new MyOrdersController();

myOrdersRoutes.use(ensureAuthenticated);

myOrdersRoutes.get('/', myOrdersController.index);
myOrdersRoutes.post('/', myOrdersController.create);
myOrdersRoutes.delete('/:dish_id', myOrdersController.delete);

module.exports = myOrdersRoutes;