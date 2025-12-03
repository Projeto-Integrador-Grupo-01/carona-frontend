import type Usuario from "./Usuario";


export default interface Veiculo {
    id: number;
    modelo: string;
    placa: string;
    foto: string;
    usuario?: Usuario[] | null;
}