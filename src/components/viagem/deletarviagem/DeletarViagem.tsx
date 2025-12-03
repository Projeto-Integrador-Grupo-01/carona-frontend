import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Viagem from "../../../models/Viagem"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarViagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Viagem apagada com sucesso', "sucesso")

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar a viagem.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }

    return (
            <div className="max-w-xl mx-auto mt-20 bg-white text-[#264117] 
                rounded-2xl shadow-2xl border border-gray-200 p-8">
            <h1 className="text-2xl font-bold mb-4 text-[#264117]">
                Excluir Viagem
            </h1>
                <p className="text-[#264117] leading-relaxed mb-6">
                Tem certeza de que deseja excluir a viagem saindo de 
                <span className="text-[#264117] font-semibold"> "{viagem.partida}"</span> para 
                    <span className="text-[#264117] font-semibold"> "{viagem.destino}"</span>?
                Esta ação não poderá ser desfeita.
            </p>
            <div className="flex justify-end gap-3">

                <button
                    onClick={retornar}
                    className="px-5 py-2 rounded-lg border border-gray-700 
                       hover:bg-gray-800 transition text-gray-700 hover:text-white cursor-pointer"
                >
                    Cancelar
                </button>

                <button
                    onClick={deletarViagem}
                    className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 
                       transition text-white font-semibold flex items-center gap-2 cursor-pointer"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={20} />
                    ) : (
                        "Excluir"
                    )}
                </button>
            </div>
        </div>
    )
}

export default DeletarViagem