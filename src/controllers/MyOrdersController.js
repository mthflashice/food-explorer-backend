const knex = require('../database/knex');
const AppError = require('../utils/AppError');


class MyOrdersController {
  async create(request, response) {
    const { dish_id } = request.body;
    const user_id = request.user.id;

    const myOrder = await knex('myOrders').insert({
      user_id,
      dish_id,
    });

    return response.json(myOrder);
}

async index(request,response){
    const user_id = request.user.id;

    const myOrders = await knex('myOrders')
    .select('dishes.*', 'myOrders.dish_id')
    .innerJoin('dishes', 'dishes.id', 'myOrders.dish_id')
    .where({ user_id });

    if (!myOrders) {
      throw new AppError('Carrinho não encontrado.', 404);
    }

    return response.json(myOrders);
    
}

async delete(request, response) {
    const { dish_id } = request.params;
    const user_id = request.user.id;

    await knex('myOrders')
    .where({user_id}, dish_id)
    .delete();

    return response.json();
    }
}

module.exports = MyOrdersController;