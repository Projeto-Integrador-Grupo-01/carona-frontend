import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import type Viagem from "../../../models/Viagem";


function ViagemDetalhe() {

    const { id } = useParams<{ id: string }>();
    const { usuario } = useContext(AuthContext);

    const [viagem, setViagem] = useState<Viagem | null>(null);
    const [relacionados, setRelacionados] = useState<Viagem[]>([]);
    const token = usuario.token;

    useEffect(() => {
        async function carregarPost() {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: token }
            });
        }
        carregarPost();
    }, [id]);

    useEffect(() => {
        async function carregarRelacionados() {
            if (!viagem?.usuario?.id) return;

            let todasViagens: Viagem[] = [];

            await buscar("/viagens", (lista: Viagem[]) => {
                todasViagens = lista;
            }, {
                headers: { Authorization: token }
            });

            const filtradas = todasViagens.filter(
                p => p.usuario?.id === viagem.usuario?.id && p.id !== viagem.id
            );

            setRelacionados(filtradas);
        }

        carregarRelacionados();
    }, [viagem]);

    return (
        <div className="min-h-screen p-6 flex flex-col items-center bg-gray-50">
            {viagem && (
                <article className="max-w-3xl bg-white shadow-sm rounded-2xl p-8 mb-16
                        border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                        Partida: {viagem.partida}
                    </h1>
                    <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                        Destino: {viagem.destino}
                    </h1>
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            src={viagem.usuario?.foto}
                            alt={viagem.usuario?.nome}
                            className="h-14 w-14 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-slate-800">
                                {viagem.usuario?.nome}
                            </span>
                            <span className="text-sm text-slate-500">
                                {new Intl.DateTimeFormat("pt-BR", {
                                    dateStyle: "long",
                                    timeStyle: "short"
                                }).format(new Date(viagem.data))}
                            </span>
                        </div>
                    </div>
                    <span
                        className="inline-block text-sm font-medium bg-yellow-100 
                            text-orange-700
                       px-3 py-1 rounded-full mb-8"
                    >
                        {viagem.veiculo?.modelo}
                    </span>
                    <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed">
                        {viagem.partida}
                    </div>
                </article>
            )}

            <div className="max-w-3xl w-full">
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                    Viagens Desse Motorista
                </h2>

                {relacionados.length === 0 && (
                    <p className="text-gray-500">Nenhuma viagem encontrada.</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relacionados.map((post) => (
                        <Link
                            key={post.id}
                            to={`/viagem/${post.id}`}
                            className="block bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
                        >
                            <h3 className="font-semibold text-slate-800 mb-4">Partida: {post.partida}</h3>
                            <h3 className="font-semibold text-slate-800 mb-4">Destino: {post.destino}</h3>
                            <span className="text-sm bg-yellow-100 
                            text-orange-700 font-semibold px-3 py-1 rounded-full">
                                {post.usuario?.nome}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ViagemDetalhe;
