import { Link, useNavigate } from "react-router-dom";
import CardVeiculo from "../cardveiculo/CardVeiculo";
import { useContext, useEffect, useState } from "react";
import type Veiculo from "../../../models/Veiculo";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaVeiculos() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado.', "info");
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarVeiculos();
    }, [veiculos.length]);

    async function buscarVeiculos() {
        try {
            setIsLoading(true);
            await buscar('/veiculos', setVeiculos, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {
                isLoading && (
                    <div className="flex justify-center w-full my-8">
                        <SyncLoader
                            color="#1f2937"
                            size={8}
                        />
                    </div>
                )
            }

            <div className="min-h-80 bg-white py-10">
                <div className="max-w-5xl mx-auto flex justify-between items-center mb-10 px-4">
                    <h1 className="text-3xl font-semibold text-[#1f2937]">
                        Gerenciar Veiculos
                    </h1>
                    <Link
                        to="/cadastrarveiculo"
                        className="bg-gray-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-700 transition"
                    >
                        + Criar Veiculo
                    </Link>
                </div>
                <div className="max-w-5xl mx-auto flex flex-col gap-6 px-4 items-center">

                    {(!isLoading && veiculos.length === 0) && (
                        <span className="text-lg text-center text-gray-500 my-10">
                            Nenhum veiculo foi encontrado.
                        </span>
                    )}

                    {veiculos.map((veiculo) => (
                        <CardVeiculo key={veiculo.id} veiculo={veiculo} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListaVeiculos