import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserControllers';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) =>{

    return response.json({mensagem: "Bem vindo"})
})

router.post('/usuarios', createUserController.handle)

export { router }