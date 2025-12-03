import { useContext, type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { SignOutIcon, UserIcon } from "@phosphor-icons/react";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta("O usuário foi desconectado com sucesso.", "info");
        navigate("/login");
    }

    const isActive = (path: string) =>
        location.pathname === path
            ? "text-yellow-700 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-yellow-700/10 after:rounded-xl"
            : "text-[#264117] px-3 py-2 ";

    let component: ReactNode = null;

    // Navbar pública (landing, login, cadastro)
    if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/cadastro"
    ) {
        component = (
            <div className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#264117]">
                    <Link
                        to="/"
                        className="text-2xl font-semibold flex justify-center gap-2 text-[#264117]"
                        title="GoTogether"
                    >
                        <div className="flex flex-col">
                            <img className="h-18" src="https://imgur.com/p62Wicv.png" alt="logo" />

                        </div>
                    </Link>
                    <div className="flex gap-8 text-sm">
                        <Link
                            to="/login"
                            className={`hover:text-yellow-700 transition ${isActive("/login")}`}
                            title="Entrar"
                        >
                            Entrar
                        </Link>
                        <Link
                            to="/cadastro"
                            className={`hover:text-yellow-700 transition ${isActive("/cadastro")}`}
                            title="Cadastre-se"
                        >
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    // Navbar da área logada
    else if (usuario.token !== "") {
        component = (
            <div className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#264117]">
                    <Link
                        to="/home"
                        className="text-2xl font-semibold flex justify-center gap-2 text-[#264117]"
                        title="PostHub Logo"
                    >
                        <img className="h-18" src="https://imgur.com/p62Wicv.png" alt="logo" />
                    </Link>
                    <nav className="hidden md:flex gap-8 text-[15px]">
                        <Link
                            to="/home"
                            className={`hover:text-yellow-700 transition ${isActive("/home")}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/viagens"
                            className={`hover:text-yellow-700 transition ${isActive("/viagens")}`}
                        >
                            Viagens
                        </Link>
                        <Link
                            to="/veiculos"
                            className={`hover:text-yellow-700 transition ${isActive("/veiculos")}`}
                        >
                            Veículos
                        </Link>
                    </nav>
                    <div className="flex gap-8">
                        <Link
                            to="/perfil"
                            className={`hover:text-yellow-700 transition ${isActive("/perfil")}`}
                            title="Perfil"
                        >
                            <UserIcon size={20} />
                        </Link>
                        <button
                            onClick={logout}
                            className="hover:text-yellow-700 transition px-3 py-2"
                            title="Sair"
                        >
                            <SignOutIcon size={20} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return <>{component}</>;
}

export default Navbar;
