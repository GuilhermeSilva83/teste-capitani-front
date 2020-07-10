export class OperationResult<TData> {
    data?: TData;
    success: boolean
    message: string

    constructor(parameters) {

    }
}

export interface IEntity {
    id: any;
}

export class Pessoa implements IEntity {
    id;
    nome;
    dataNascimento;
    cpf;
    cidadeId;

    constructor() {

    }
}

