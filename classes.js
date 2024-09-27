class Usuario{
    constructor(email, nome, senha){
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}

class Roupa{
    constructor(foto, inscricao, valor){
        this.foto = foto;
        this.inscricao = inscricao;
        this.valor = valor;
    }
}

class Modelos{
    constructor(){
        this.listaDeRoupas = []
    }

    adicionarRoupa(roupa){
        this.listaDeRoupas.push(roupa);
    }
}