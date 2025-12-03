import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type Veiculo from "../../../models/Veiculo";
import { buscar } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function PopularTags() {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado.", "info");
            navigate("/login");
            return;
        }
        carregarVeiculos();
    }, []);

    async function carregarVeiculos() {
        try {
            await buscar("/veiculos", setVeiculos, {
                headers: { Authorization: token },
            });
        } catch (erro: any) {
            if (erro.toString().includes("401")) handleLogout();
        }
    }

    return (
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm 
             hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold text-lg mb-4">Veiculos Populares</h3>

            <div className="flex flex-wrap gap-3">
                {veiculos.length === 0 && (
                    <span className="text-sm text-gray-500">Nenhuma tag disponível.</span>
                )}

                {veiculos.map((veiculo) => (
                    <p
                        key={veiculo.id}
                        className="
                            px-3 py-1 
                            rounded-md 
                            text-sm  
                            bg-yellow-100 
                            text-orange-700 
                            hover:bg-yellow-200 
                            transition
                        "
                    >
                        {veiculo.modelo}
                    </p>
                ))}
            </div>
        </div>
    );
}