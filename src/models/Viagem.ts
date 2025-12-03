import type Veiculo from "./Veiculo";
import type Usuario from "./Usuario";

export default interface Viagem {
    id: number;
    destino: string;
    partida: string;
    preco: number;
    data: string;
    tempo: number;
    veiculo: Veiculo | null;
    usuario: Usuario | null;
}