import { Area } from "./area.model";
import { Categoria } from "./categoria.model";
import { OpcoesPergunta } from "./opcoes-pergunta.model";

export interface Pergunta {

    id: number;
    descricao: string;
    status: string;
    dataCriacao: Date;
    utilizador: string;
    categoria: Categoria;
    area: Area;
    idCategoria: number;
    idArea: number;
    opcoes: OpcoesPergunta[];
}
