import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { SignOutIcon, UserIcon } from "@phosphor-icons/react";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta('O usuário foi desconectado com sucesso.', "info");
        navigate('/login');
    }

    const isActive = (path: string) =>
        location.pathname === path
            ? "text-yellow-700 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-yellow-700/10 after:rounded-xl"
            : "text-gray-700 px-3 py-2 ";

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <div className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#264117]">
                    <Link to="/home" className="text-2xl font-semibold flex justify-center gap-2 text-blue-950" title="PostHub Logo">
                        <img className="h-12" src="https://i.imgur.com/oZkNh1Y.png" alt="" />
                        <span className="flex justify-center items-center text-[#264117]">GoTogether</span>
                    </Link>
                    <nav className="hidden md:flex gap-8 text-[15px]">
                        <Link to="/home" className={`hover:text-yellow-700 transition ${isActive("/home")}`}>Home</Link>
                        <Link to="/viagens" className={`hover:text-yellow-700 transition ${isActive("/viagens")}`}>Viagens</Link>
                        <Link to="/veiculos" className={`hover:text-yellow-700 transition ${isActive("/veiculos")}`}>Veiculos</Link>

                    </nav>
                    <div className="flex gap-8">
                        <Link to="/perfil" className={`hover:text-yellow-700 transition ${isActive("/perfil")}`} title="Perfil"><UserIcon size={20} /></Link>
                        <Link to='' onClick={logout} className='hover:text-yellow-700 transition px-3 py-2' title="Sair"><SignOutIcon size={20} /></Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {component}
        </>
    )
}

export default Navbar