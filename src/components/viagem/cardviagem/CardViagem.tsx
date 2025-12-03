import { useContext } from 'react'
import { Link } from 'react-router-dom'
import type Viagem from '../../../models/Viagem'
import { PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardViagensProps {
    viagem: Viagem
}

function CardViagem({ viagem }: CardViagensProps) {

    const { usuario } = useContext(AuthContext)

    const isDonoDaViagem = usuario?.id === viagem.usuario?.id

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm 
             hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
             overflow-hidden flex flex-col justify-between"
        >
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                    <img
                        src={viagem.usuario?.foto}
                        alt={viagem.usuario?.nome}
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-slate-800">
                            {viagem.usuario?.nome}
                        </h3>
                        <p className="text-sm text-slate-500">
                            {viagem.data.split("-").reverse().join("/")}
                        </p>
                    </div>
                </div>

                {isDonoDaViagem && (
                    <div className="flex gap-2">
                        <Link
                            to={`/editarviagem/${viagem.id}`}
                            className="bg-transparent p-2 rounded-md border border-gray-200 shadow-sm 
                                       hover:bg-gray-100 transition flex items-center justify-center text-slate-800"
                            title="Editar Viagem"
                        >
                            <PencilSimpleIcon />
                        </Link>

                        <Link
                            to={`/deletarviagem/${viagem.id}`}
                            className="bg-transparent p-2 rounded-md border border-gray-200 shadow-sm 
                                       hover:bg-gray-100 transition flex items-center justify-center text-slate-800"
                            title="Excluir Viagem"
                        >
                            <TrashSimpleIcon />
                        </Link>
                    </div>
                )}
            </div>

            <div className="p-6 space-y-3">
                <span className=" bg-yellow-100 
                            text-orange-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                    {viagem.veiculo?.modelo}
                </span>

                <h2 className="text-xl font-bold text-slate-800">
                    Partida: {viagem.partida}
                </h2>
                <h2 className="text-xl font-bold text-slate-800">
                    Destino: {viagem.destino}
                </h2>

                <p className="text-slate-600 line-clamp-2 mb-6">
                    {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(viagem.preco)
                    }
                </p>

                <Link
                    to={`/viagem/${viagem.id}`}
                    className="bg-lime-950 text-white hover:bg-amber-800 transition cursor-pointer px-4 py-2 rounded-lg"
                >
                    Mais detalhes →
                </Link>
            </div>
        </div>
    )
}

export default CardViagem
