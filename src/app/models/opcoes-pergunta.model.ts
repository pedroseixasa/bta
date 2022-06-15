import { Pergunta } from "./pergunta.model";

export interface OpcoesPergunta {

    id: number;
    dataCriacao: Date;
    utilizador: string;
    idPergunta: number;
    descricao: string;
    correto: boolean;
    pergunta?: Pergunta;
}