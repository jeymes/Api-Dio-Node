import { Request, Response } from 'express';
import { CreateUserServices } from '../services/CreateUserServices';


class CreateUserController{
    handle(request: Request, response: Response) {

        const createUserService = new CreateUserServices();

        const nome = request.body.nome;
        const email = request.body.email;
        const profissao = request.body.profissao;

        if(nome.length === 0 || email.length ===0){
            return response.status(400).json({mensagem: 'Prencha todos os campos'})
        }

        const user = createUserService.execute({nome, email, profissao})

        return response.status(201).json({user})
    }
}

export { CreateUserController }