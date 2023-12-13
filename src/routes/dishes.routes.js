const {Router} = require('express');
const DishesController = require('../controllers/DishesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const uploadConfig = require('../configs/upload')
const multer = require('multer')

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.get('/', dishesController.index);
dishesRoutes.post('/', dishesController.create);
dishesRoutes.get('/:id', dishesController.show);
dishesRoutes.delete('/:id', dishesController.delete);
dishesRoutes.patch('/:id', upload.single('image'), dishesController.update);



module.exports = dishesRoutes;

