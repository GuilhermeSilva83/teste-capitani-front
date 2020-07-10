export class OperationResult<TData> {
    data?: TData;
    success: boolean
    message: string

    constructor(parameters) {

    }
}

export class Tipo implements IEntity {
    constructor() {
    }
    id: any;
    nome: string;
}

export class Cidade extends Tipo {
    estadoId: 0;
    constructor() {
        super();
    }
}

export interface IEntity {
    id: any;
}

export class Pessoa implements IEntity {
    id = 0;
    nome = "";
    dataNascimento;
    cpf = ""

    email;


    cidadeId = null;
    cidade: Cidade;


    constructor() {

    }
}

