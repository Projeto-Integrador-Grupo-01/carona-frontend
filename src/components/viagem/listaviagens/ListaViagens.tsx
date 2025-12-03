import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Viagem from "../../../models/Viagem";
import { buscar } from "../../../services/Service";
import CardViagem from "../cardviagem/CardViagem";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface ListaViagensProps {
    partidaFiltro: string | null;
    destinoFiltro: string | null; // 🔥 novo filtro
}

function ListaViagens({ partidaFiltro, destinoFiltro }: ListaViagensProps) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viagens, setViagens] = useState<Viagem[]>([])
    const [busca, setBusca] = useState<string>("")

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (!token) {
            ToastAlerta('Você precisa estar logado!', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarViagens()
    }, [])

    async function buscarViagens() {
        try {
            setIsLoading(true)

            await buscar('/viagens', setViagens, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    // 🔥 FILTRAGEM COMPLETA (busca + partida + destino)
    const viagensFiltradas = viagens.filter((v) => {
        // 1. Busca por texto → procura em PARTIDA e DESTINO
        const buscaLower = busca.toLowerCase();
        const coincideBusca =
            v.partida.toLowerCase().includes(buscaLower) ||
            v.destino.toLowerCase().includes(buscaLower);

        // 2. Filtro por partida
        const coincidePartida =
            partidaFiltro === null || v.partida === partidaFiltro;

        // 3. Filtro por destino (novo)
        const coincideDestino =
            destinoFiltro === null || v.destino === destinoFiltro;

        return coincideBusca && coincidePartida && coincideDestino;
    });

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#1f2937" size={8} />
                </div>
            )}

            <div className="min-h-screen bg-gray-50 py-10">
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">

                        {/* 🔍 Input de Busca */}
                        <input
                            type="text"
                            placeholder="Buscar por partida ou destino..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="px-4 py-2 mb-6 border border-gray-200 rounded-md outline-none shadow-sm focus:border-gray-500"
                        />

                        {!isLoading && viagensFiltradas.length === 0 && (
                            <span className="text-lg text-center text-gray-500 my-10">
                                Nenhuma Viagem foi encontrada.
                            </span>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {viagensFiltradas.map((viagem) => (
                                <CardViagem key={viagem.id} viagem={viagem} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaViagens;