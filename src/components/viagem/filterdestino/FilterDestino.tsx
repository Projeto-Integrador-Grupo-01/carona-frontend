import { useContext, useEffect, useState } from "react";
import type Viagem from "../../../models/Viagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

interface FilterViagensProps {
    onFiltrar: (destino: string | null) => void;
}

function FilterDestino({ onFiltrar }: FilterViagensProps) {
    const [viagens, setViagens] = useState<Viagem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (!token) return;
        carregarViagens();
    }, []);

    async function carregarViagens() {
        try {
            setIsLoading(true);
            await buscar("/viagens", setViagens, {
                headers: { Authorization: token },
            });
        } catch (erro: any) {
            if (erro.toString().includes("401")) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    const destinosUnicos = Array.from(new Set(viagens.map(v => v.destino)));

    return (
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm
                        hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold text-lg mb-4 text-lime-950">Filtrar por Destino</h3>

            {isLoading && (
                <div className="flex justify-center py-4">
                    <SyncLoader color="#1f2937" size={10} />
                </div>
            )}

            <ul className="space-y-2">
                <li>
                    <button
                        onClick={() => onFiltrar(null)}
                        className="w-full text-left block px-4 py-2 rounded-lg text-sm border border-gray-200
                                   bg-gray-900 text-white hover:bg-gray-800 transition cursor-pointer"
                    >
                        Todos Destinos
                    </button>
                </li>

                {destinosUnicos.map((destino, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onFiltrar(destino)}
                            className="w-full text-left block px-4 py-2 rounded-lg text-sm
                                       bg-gray-100 text-gray-700 border border-gray-200
                                       hover:bg-gray-200 transition cursor-pointer"
                        >
                            {destino}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterDestino;