import { Categoria } from "./categoria.model";

export interface Area {

    id: string;
    name: string;
    dataCriacao: Date;
    utilizador: string;
    categorias?: Categoria[];
}
