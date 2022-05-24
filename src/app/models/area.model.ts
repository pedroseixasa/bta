import { Categoria } from "./categoria.model";

export interface Area {

    id: number;
    name: string;
    dataCriacao: Date;
    utilizador: string;
    categorias: Categoria[];
}
