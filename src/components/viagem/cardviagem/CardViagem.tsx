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
    hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
    overflow-hidden flex flex-col justify-between">

    {/* TOPO — Motorista + Data */}
    <div className="flex items-center justify-between px-6 py-5 bg-linear-to-r from-lime-100 to-lime-50">
        <div className="flex items-center gap-4">
            <img
                src={viagem.usuario?.foto}
                alt={viagem.usuario?.nome}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-lime-700"
            />

            <div>
                <h3 className="font-semibold text-lime-950 text-lg">
                    {viagem.usuario?.nome}
                </h3>

                <p className="text-sm text-lime-800 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-lime-700 rounded-full"></span>
                    {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: "short"
                    }).format(new Date(viagem.data))}
                </p>
            </div>
        </div>

        {isDonoDaViagem && (
            <div className="flex gap-2">
                <Link
                    to={`/editarviagem/${viagem.id}`}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    title="Editar Viagem"
                >
                    <PencilSimpleIcon />
                </Link>

                <Link
                    to={`/deletarviagem/${viagem.id}`}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    title="Excluir Viagem"
                >
                    <TrashSimpleIcon />
                </Link>
            </div>
        )}
    </div>

    {/* CORPO */}
    <div className="p-6 space-y-5">

        {/* ORIGEM → DESTINO */}
        <div className="space-y-1">
            <div className="flex items-center text-lime-950 font-bold text-xl gap-2">
                <span className="w-2 h-2 bg-lime-700 rounded-full"></span>
                {viagem.partida}
            </div>

            <div className="border-l-2 border-lime-700 h-4 ml-[7px]"></div>

            <div className="flex items-center text-lime-950 font-bold text-xl gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                {viagem.destino}
            </div>
        </div>

        {/* PREÇO */}
        <p className="text-2xl font-bold text-amber-700">
            {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(viagem.preco)}
        </p>

        {/* BOTÃO */}
        <Link
            to={`/viagem/${viagem.id}`}
            className="w-full text-center bg-lime-900 text-white 
            hover:bg-amber-700 transition cursor-pointer px-4 py-3 
            rounded-xl font-semibold shadow"
        >
            Ver detalhes
        </Link>
    </div>
</div>

    )
}

export default CardViagem
