export class OperationResult<TData> {
    data?: TData;
    success: boolean
    message: string

    constructor() {

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
    estado: Tipo;
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
    dataNascimento: Date;
    cpf: string;

    email: string;

    cep: string;
    cidadeId?: number = null;
    estadoId?: number = null;

    cidade: Cidade;


    constructor() {

    }
}

