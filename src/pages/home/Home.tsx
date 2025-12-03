import { useState } from "react";
import ModalViagem from "../../components/viagem/modalviagem/ModalViagem";
import ListaViagens from "../../components/viagem/listaviagens/ListaViagens";
import TagsVeiculos from "../../components/veiculo/tagsveiculos/TagsVeiculos";
import FilterPartida from "../../components/viagem/filterpartida/FilterPartida";
import FilterDestino from "../../components/viagem/filterdestino/FilterDestino";

function Home() {
    const [partidaFiltro, setPartidaFiltro] = useState<string | null>(null);
    const [destinoFiltro, setDestinoFiltro] = useState<string | null>(null);
    return (
        <>
            <div className="relative w-full h-[85vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://imgur.com/hsWhayt.png')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center flex flex-col gap-5 items-center px-4">

                    <h2 className="text-5xl md:text-6xl font-serif text-white">
                        GoTogether
                    </h2>
                    <p className="text-xl text-slate-200 max-w-xl">
                        Compartilhando caminhos
                    </p>
                    <div className="mt-4">
                        <ModalViagem />
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-semibold text-[#264117] mb-1">
                        Explore novas viagens
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 flex gap-10">

                    <div className="flex-1">
                        <ListaViagens partidaFiltro={partidaFiltro} destinoFiltro={destinoFiltro} />
                    </div>

                    <aside className="w-80 hidden lg:flex flex-col gap-6 py-10 my-4">
                        <FilterPartida onFiltrar={(partida) => setPartidaFiltro(partida)} />
                        <TagsVeiculos />
                    </aside>

                </div>
            </div>
        </>
    )
}

export default Home;
