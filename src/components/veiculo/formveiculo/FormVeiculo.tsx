import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Veiculo from "../../../models/Veiculo";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormVeiculo() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    async function buscarVeiculoPorId() {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarVeiculoPorId();
        }
    }, [id]);

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado.', "info");
            navigate('/login');
        }
    }, [token]);

    function retornar() {
        navigate("/veiculos");
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoVeiculo(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        if (id !== undefined) {
            try {
                await atualizar('/veiculos', veiculo, setVeiculo, {
                    headers: { Authorization: token }
                });
                ToastAlerta('O Veiculo foi atualizado com sucesso.', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar o veiculo.', "erro");
                }
            }
        } else {
            try {
                await cadastrar('/veiculos', veiculo, setVeiculo, {
                    headers: { Authorization: token }
                });
                ToastAlerta('O Veiculo foi cadastrado com sucesso.', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar o veiculo.', "erro");
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-md border border-gray-200 p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                    {id === undefined ? 'Criar novo veiculo' : 'Atualizar veiculo'}
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Preencha os dados do veiculo abaixo
                </p>
                <form className="flex flex-col gap-6" onSubmit={gerarNovoVeiculo}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           Modelo *
                        </label>
                        <input
                            type="text"
                            name="modelo"
                            placeholder="Digite o modelo do veiculo"
                            value={veiculo.modelo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           Placa *
                        </label>
                        <input
                            type="text"
                            name="placa"
                            placeholder="Digite a placa do veiculo"
                            value={veiculo.placa}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           URL da Foto *
                        </label>
                        <input
                            type="url"
                            name="foto"
                            placeholder="https://..."
                            value={veiculo.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                            type="submit"
                            className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition flex items-center justify-center cursor-pointer"
                        >
                            {isLoading ? (
                                <ClipLoader color="#ffffff" size={20} />
                            ) : (
                                id === undefined ? 'Criar Veiculo' : 'Atualizar Veiculo'
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={retornar}
                            className="bg-gray-600 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormVeiculo