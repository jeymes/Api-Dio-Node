interface IUsuario {
    nome: string,
    email: string,
    profissao: string
}

class CreateUserServices {
    execute({nome, email, profissao}:IUsuario){
        const data = [];

        data.push({nome, email, profissao});

        return data;
    }
}

export { CreateUserServices }