import { useContext, useEffect, useState } from "react";
import type Veiculo from "../../../models/Veiculo";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

interface FilterVeiculosProps {
    onFiltrar: (idVeiculo: number | null) => void;
}

function FilterVeiculos({ onFiltrar }: FilterVeiculosProps) {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (!token) return;
        carregarVeiculos();
    }, []);

    async function carregarVeiculos() {
        try {
            setIsLoading(true);
            await buscar("/veiculos", setVeiculos, {
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

    return (
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm
                        hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold text-lg mb-4 text-[#264117]">Filtrar por Veiculo</h3>

            {isLoading && (
                <div className="flex justify-center py-4">
                    <SyncLoader color="#1f2937" size={10} />
                </div>
            )}

            <ul className="space-y-2">
                <li>
                    <button
                        onClick={() => onFiltrar(null)}
                        className={`w-full text-left block px-4 py-2 rounded-lg text-sm border border-gray-200
                                    bg-[#264117] text-white hover:bg-yellow-700 transition cursor-pointer`}
                    >
                        Todas Viagens
                    </button>
                </li>

                {veiculos.map((veiculo) => (
                    <li key={veiculo.id}>
                        <button
                            onClick={() => onFiltrar(veiculo.id!)}
                            className="w-full text-left block px-4 py-2 rounded-lg text-sm
                                       bg-gray-100 text-[#264117] border border-gray-200
                                       hover:bg-gray-200 transition cursor-pointer"
                        >
                            {veiculo.modelo}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterVeiculos;