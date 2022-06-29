import express from 'express';
import { router } from './routes';

const serve = express();

serve.use(express.json())
serve.use(router)

serve.listen(5000, () =>{
    console.log('servidor na porta 5000 http://localhost:5000/')
})