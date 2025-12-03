import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom";

function Footer() {

    let year = new Date().getFullYear()
    const { usuario } = useContext(AuthContext);
    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <footer className="bg-[#28353F] text-white py-12">
                <div className="max-w-6xl mx-auto px-6 flex  gap-10">
                    <div>
                        <img className="h-14 w-14" src="https://i.imgur.com/oZkNh1Y.png" alt="GoTogether Logo" />
                        
                        
                        <p className="text-sm leading-relaxed text-gray-400 max-w-[60%]">
                            <h2 className="text-xl font-semibold text-white mb-2 mt-4">GoTogether</h2>
                            Mobilidade inteligente dentro da sua empresa. Compartilhe o caminho, multiplique conexões.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white mb-3">Links Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/home" className="hover:text-white text-gray-300">Home</Link></li>
                            <li><Link to="/viagens" className="hover:text-white text-gray-300">Viagens</Link></li>
                            <li><Link to="/veiculos" className="hover:text-white text-gray-300">Veiculos</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
                    © {year} GoTogether. Todos os direitos reservados.
                </div>
            </footer>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer