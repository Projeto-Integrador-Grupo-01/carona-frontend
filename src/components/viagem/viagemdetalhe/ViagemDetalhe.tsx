import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import type Viagem from "../../../models/Viagem";
import { ArrowRightIcon, CalendarIcon, CarIcon, CheckCircleIcon, ClockIcon, MapPinIcon, ScrollIcon, SeatIcon, StarIcon, SteeringWheelIcon, UserIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import MapaViagem from "../mapaviagem/MapaViagem";


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

    async function calcularDistancia(origem, destino) {
        const response = await fetch(
            `https://api.openrouteservice.org/v2/directions/driving-car?api_key=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFjMDJmNzE0M2IxYzQzMTM5NjRmMmQ4MGRiMjQ1MGVjIiwiaCI6Im11cm11cjY0In0=&start=${origem.lng},${origem.lat}&end=${destino.lng},${destino.lat}`
        );

        const data = await response.json();

        const distanciaKm = data.features[0].properties.summary.distance / 1000;
        const duracaoMin = data.features[0].properties.summary.duration / 60;

        return { distanciaKm, duracaoMin };
    }

    async function getCoordenadas(endereco) {
        const response = await fetch(
            `https://api.openrouteservice.org/geocode/search?api_key=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFjMDJmNzE0M2IxYzQzMTM5NjRmMmQ4MGRiMjQ1MGVjIiwiaCI6Im11cm11cjY0In0=&text=${encodeURIComponent(endereco)}`
        );

        const data = await response.json();
        const coords = data.features[0].geometry.coordinates;

        return {
            lng: coords[0],
            lat: coords[1],
        };
    }

    const [duracao, setDuracao] = useState(null);
    const [distancia, setDistancia] = useState(null);

    useEffect(() => {
        async function calcularTudo() {
            if (!viagem) return;

            const origemCoords = await getCoordenadas(viagem.partida);
            const destinoCoords = await getCoordenadas(viagem.destino);

            const { distanciaKm, duracaoMin } = await calcularDistancia(origemCoords, destinoCoords);

            setDistancia(distanciaKm.toFixed(1));
            setDuracao(Math.round(duracaoMin));
        }

        calcularTudo();
    }, [viagem]);

    return (
        <div className="min-h-screen p-6 flex flex-col items-center bg-gray-100">

            {viagem && (
                <article className="max-w-3xl w-full bg-white shadow-lg rounded-3xl p-10 mb-16 border border-gray-200">

                    {/* ORIGEM → DESTINO */}
                    <div className="flex items-start gap-5 mb-10">
                        <div className="flex flex-col items-center mt-2">
                            <span className="w-3 h-3 bg-lime-700 rounded-full"></span>
                            <div className="h-16 w-0.5 bg-gray-300"></div>
                            <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-extrabold text-lime-950 flex items-center gap-2">
                                <MapPinIcon size={26} weight="fill" className="text-lime-700" />
                                {viagem.partida}
                            </h1>

                            <h1 className="text-3xl font-extrabold text-lime-950 flex items-center gap-2">
                                <ArrowRightIcon size={26} className="text-lime-900" />
                                <MapPinIcon size={26} weight="fill" className="text-amber-600" />
                                {viagem.destino}
                            </h1>
                        </div>
                    </div>

                    {/* MOTORISTA */}
                    <div className="flex items-center gap-4 mb-10 bg-lime-50 rounded-2xl p-5 border border-lime-100">
                        <img
                            src={viagem.usuario?.foto}
                            alt={viagem.usuario?.nome}
                            className="h-16 w-16 rounded-full object-cover ring-2 ring-lime-700"
                        />

                        <div className="flex flex-col">
                            <p className="text-xl font-semibold text-lime-950 flex items-center gap-2">
                                <UserIcon size={20} />
                                {viagem.usuario?.nome}
                            </p>

                            {/* RATING */}
                            <div className="flex items-center gap-1 mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={18}
                                        weight={i < 5 ? "fill" : "regular"}
                                        className={i < 5 ? "text-amber-500" : "text-gray-400"}
                                    />
                                ))}
                            </div>

                            {/* Data */}
                            <p className="text-sm text-lime-800 flex items-center gap-2 mt-2">
                                <CalendarIcon size={18} />
                                {new Intl.DateTimeFormat("pt-BR", {
                                    dateStyle: "full",
                                }).format(new Date(viagem.data))}
                            </p>

                            {/* Hora */}
                            <p className="text-sm text-lime-800 flex items-center gap-2">
                                <ClockIcon size={18} />
                                {new Intl.DateTimeFormat("pt-BR", {
                                    timeStyle: "short",
                                }).format(new Date(viagem.data))}
                            </p>
                        </div>
                    </div>

                    {/* CARRO */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-10 flex items-center gap-6">
                        <img
                            src={viagem.veiculo?.foto}
                            alt="Foto do carro"
                            className="h-28 w-40 object-cover rounded-xl shadow"
                        />

                        <div>
                            <p className="text-lg font-semibold text-lime-900 flex items-center gap-2">
                                <SteeringWheelIcon size={22} />
                                {viagem.veiculo?.modelo}
                            </p>
                            <p className="text-sm text-gray-600">
                                Placa: {viagem.veiculo?.placa}
                            </p>
                        </div>
                    </div>

                    {/* STATUS DA VIAGEM */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                        {/* Assentos */}
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex flex-col gap-2">
                            <p className="text-sm text-gray-600">Assentos Disponíveis</p>
                            <p className="font-bold text-lime-900 flex items-center gap-2">
                                <SeatIcon size={22} />
                                4
                            </p>
                        </div>

                        {/* Tempo estimado */}
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex flex-col gap-2">
                            <p className="text-sm text-gray-600">Tempo Estimado</p>
                            <p className="font-bold text-lime-900">
                                {duracao ? `${duracao} min` : "calculando..."}
                            </p>
                        </div>

                        {/* Preço */}
                        <div className="bg-lime-100 p-5 rounded-2xl border border-lime-300 flex flex-col gap-1">
                            <p className="text-sm text-lime-900">Preço por Passageiro</p>
                            <p className="text-3xl font-extrabold text-amber-700">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(viagem.preco)}
                            </p>
                        </div>
                    </div>

                    {/* MAPA */}
                    <div className="rounded-2xl overflow-hidden shadow-md border mb-10">
                        <div className="mb-10">
                            <MapaViagem partida={viagem.partida} destino={viagem.destino} />
                        </div>
                    </div>

                    {/* Regras da Viagem */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-lime-950 mb-4 flex items-center gap-2">
                            <ScrollIcon size={26} weight="duotone" />
                            Regras da Viagem
                        </h2>

                        <ul className="space-y-3 text-lime-950 text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircleIcon size={22} className="text-lime-700 mt-1" />
                                <span>Chegar com <strong>5 minutos de antecedência</strong> ao ponto de encontro.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon size={22} className="text-lime-700 mt-1" />
                                <span>Uso de cinto de segurança <strong>obrigatório</strong> durante todo o trajeto.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon size={22} className="text-lime-700 mt-1" />
                                <span><strong>Não é permitido fumar</strong> dentro do veículo.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon size={22} className="text-lime-700 mt-1" />
                                <span>Bagagens pequenas são permitidas. Para volumes maiores, avisar antes.</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon size={22} className="text-lime-700 mt-1" />
                                <span>Respeito e cordialidade entre todos os passageiros.</span>
                            </li>
                        </ul>
                    </div>

                    {/* BOTÃO DE RESERVA */}
                    <button
                        className="mt-8 w-full flex items-center justify-center gap-3 bg-amber-600 text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-amber-700 transition mb-4"
                    >
                        Reservar Assento
                    </button>

                    {/* CONTATO */}
                    <a
                        href={`https://wa.me/000000?text=Olá! Estou interessado na viagem de ${viagem.partida} para ${viagem.destino}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-lime-700 text-white py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-lime-900 transition"
                    >
                        <WhatsappLogoIcon size={28} weight="fill" />
                        Entrar em Contato
                    </a>

                </article>
            )}

        </div>
    );
}

export default ViagemDetalhe;
