import { Area } from "./area.model";
import { Categoria } from "./categoria.model";
import { OpcoesPergunta } from "./opcoes-pergunta.model";

export interface Pergunta {

    id?: string;
    descricao: string;
    status: string;
    dataCriacao: Date;
    utilizador: string;
    categoria: Categoria;
    area: Area;
    idCategoria: number;
    idArea: number;
    resposta1: string;
    resposta2: string;
    resposta3: string;
    respostacerta: string;
    respostaUtilizador: string;
    opcoes: OpcoesPergunta[];
}
