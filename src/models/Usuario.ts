import type Viagem from "./Viagem";

export default interface Usuario {
    id: number;
    nome: string;
    foto: string;
    email: string;
    senha: string;
    viagem?: Viagem[] | null;
}