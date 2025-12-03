
import SobreEquipe from "../../components/equipe/SobreEquipe";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import BenefitsSection from "../../components/beneficios/BenefitsSection";

function LandingPage() {

    let year = new Date().getFullYear()

    const isActive = (path: string) =>
        location.pathname === path
            ? "text-yellow-700 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-yellow-700/10 after:rounded-xl"
            : "text-gray-700 px-3 py-2 ";

    return (
        <>



            {/* <div className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-gray-800">
                    <Link to="/" className="text-2xl font-semibold flex justify-center gap-2 text-blue-950" title="GoTogether">
                        <div className="flex flex-col">
                            <img className="h-14 w-14 self-center" src="https://i.imgur.com/oZkNh1Y.png" alt="GoTogether Logo" />
                            <div>
                                <span className="flex justify-center items-center text-blue-950">GoTogether</span>
                            </div>
                        </div>
                    </Link>
                    <div className="flex gap-8">
                        <Link to="/login" className={`hover:text-yellow-700 transition ${isActive("/login")}`} title="Entrar">Entrar</Link>
                        <Link to='/cadastro' className={`hover:text-yellow-700 transition ${isActive("/cadastro")}`} title="Cadastre-se">Cadastre-se</Link>
                    </div>
                </div>
            </div> */}

            <Banner />



            {/* <div className="relative w-full min-h-screen flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://i.imgur.com/9XV8jhE.jpeg')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center flex flex-col gap-5 items-center px-4">

                    <h2 className="text-5xl md:text-6xl font-serif text-white">
                        Seu Hub de Ideias
                    </h2>
                    <p className="text-xl text-slate-200 max-w-xl">
                        Onde cada post encontra seu lugar
                    </p>
                    <div className="mt-4">
                        <Link to="/login"
                            className='border rounded px-4 py-2 bg-white border-white hover:bg-gray-800 hover:text-gray-200 hover:border-gray-800 cursor-pointer'>
                            Acessar Sistema
                        </Link>
                    </div>
                </div>
            </div> */}

            <BenefitsSection />

            <SobreEquipe />


        </>
    )
}

export default LandingPage;