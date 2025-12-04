import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Viagem from "../../../models/Viagem";
import type Veiculo from "../../../models/Veiculo";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormViagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const [veiculo, setVeiculo] = useState<Veiculo>({ id: 0, modelo: '', placa: '', foto: '', })

    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarVeiculos() {
        try {
            await buscar('/veiculos', setVeiculos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info");
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarVeiculos()

        if (id !== undefined) {
            buscarViagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setViagem({
            ...viagem,
            veiculo: veiculo,
        })
    }, [veiculo])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value,
            veiculo: veiculo,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/viagens');
    }

    async function gerarNovaViagem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Viagem atualizada com sucesso', "sucesso")

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar a Viagem', "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Viagem cadastrada com sucesso', "sucesso");

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar a Viagem', "erro");
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoVeiculo = veiculo.modelo === '';

    return (
        <div className="flex justify-center w-full my-8">
            <div className="container max-w-2xl">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-slate-200">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        {id !== undefined ? 'Editar Viagem' : 'Cadastrar Viagem'}
                    </h1>

                    <form
                        className="flex flex-col gap-5"
                        onSubmit={gerarNovaViagem}
                    >
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Partida</label>
                            <input
                                placeholder="Ex: Rio Claro, SP"
                                name="partida"
                                required
                                value={viagem.partida}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Destino</label>
                            <input
                                type="text"
                                placeholder="Ex: Araras, SP"
                                name="destino"
                                required
                                value={viagem.destino}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Preço</label>
                            <input
                                value={
                                    viagem.preco === 0 || viagem.preco === undefined ? "" : viagem.preco
                                }
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                type="number"
                                step=".01"
                                placeholder="Adicione aqui o preço da viagem"
                                name="preco"
                                id="preco"
                                required
                                className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Data</label>
                            <input
                                value={viagem.data}
                                onChange={(e) => atualizarEstado(e)}
                                type="date"
                                name="data"
                                id="data"
                                required
                                className="border border-gray-300 rounded-lg p-3 bg-white text-base
							   focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Duração</label>
                            <input
                                type="number"
                                placeholder="Duração em horas (ex: 0,3)"
                                name="tempo"
                                required
                                value={viagem.tempo}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold">Veiculo da Viagem</label>
                            <select
                                name="veiculo"
                                id="veiculo"
                                onChange={(e) => buscarVeiculoPorId(e.currentTarget.value)}
                                className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <option value="" disabled selected>Selecione um veiculo</option>

                                {veiculos.map((veiculo) => (
                                    <option key={veiculo.id} value={veiculo.id}>
                                        {veiculo.modelo}
                                    </option>
                                ))}

                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={carregandoVeiculo}
                            className="mt-4 rounded-xl bg-[#264117] hover:bg-gray-700 cursor-pointer
                     text-white font-semibold py-3 
                     flex justify-center items-center
                     disabled:bg-slate-300 transition-all"
                        >
                            {isLoading ? (
                                <ClipLoader color="#ffffff" size={24} />
                            ) : (
                                <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormViagem;