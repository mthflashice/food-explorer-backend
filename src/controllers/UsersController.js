const AppError = require('../utils/AppError')
const {hash} = require ('bcryptjs')
const sqliteConnection = require ('../database/sqlite')

class UserController{
    async create(request, response){
        const{name,email, password, is_admin=false} = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?), [email]")

        if(checkUserExists){
            throw new AppError('Este e-mail já está em uso!!');
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            'INSERT INTo users ( name, email, password, is_admin) VALUE (?, ?, ?, ?)',
            [name, email, hashedPassword, is_admin]
        );

        return response.status(201).json();
    }
}

module.exports= UserController;