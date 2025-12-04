import {
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import {
    SignOutIcon,
    UserIcon,
    ListIcon,
    XIcon,
} from "@phosphor-icons/react";

type MenuState = "closed" | "open";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);

    const [menuState, setMenuState] = useState<MenuState>("closed");

    const isPublicRoute =
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/cadastro";

    function logout() {
        handleLogout();
        ToastAlerta("O usuário foi desconectado com sucesso.", "info");
        navigate("/login");
        setMenuState("closed");
    }

    const isActive = (path: string) =>
        location.pathname === path
            ? "text-yellow-700 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-yellow-700/10 after:rounded-xl"
            : "text-[#264117] px-3 py-2 ";

    const openMenu = () => setMenuState("open");
    const closeMenu = () => setMenuState("closed");

    // ESC fecha o menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuState === "open") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [menuState]);

    // trava scroll quando menu está aberto
    useEffect(() => {
        if (menuState === "open") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuState]);

    let component: ReactNode = null;

    // não mostra navbar em rotas privadas sem token
    if (!isPublicRoute && usuario.token === "") {
        return null;
    }

    // Conteúdo da navbar pública (landing/login/cadastro)
    if (isPublicRoute) {
        component = (
            <header className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#264117]">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-semibold flex justify-center gap-2 text-[#264117]"
                        title="GoTogether"
                        onClick={closeMenu}
                    >
                        <div className="flex flex-col">
                            <img
                                className="h-18"
                                src="https://imgur.com/p62Wicv.png"
                                alt="logo"
                            />
                        </div>
                    </Link>

                    {/* Links desktop */}
                    <div className="hidden md:flex gap-8 text-xl">
                        <Link
                            to="/login"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/login"
                            )}`}
                            title="Entrar"
                        >
                            Entrar
                        </Link>
                        <Link
                            to="/cadastro"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/cadastro"
                            )}`}
                            title="Cadastre-se"
                        >
                            Cadastre-se
                        </Link>
                    </div>

                    {/* Botão menu mobile */}
                    <button
                        className="md:hidden p-2 text-[#264117]"
                        onClick={openMenu}
                        aria-label="Abrir menu"
                    >
                        <ListIcon size={28} weight="bold" />
                    </button>
                </div>

                {/* MENU MOBILE PÚBLICO */}
                {menuState === "open" && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Drawer */}
                        <div className="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg md:hidden flex flex-col">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                                <span className="text-[#264117] font-semibold">Menu</span>
                                <button
                                    className="p-2 text-[#264117]"
                                    onClick={closeMenu}
                                    aria-label="Fechar menu"
                                >
                                    <XIcon size={24} weight="bold" />
                                </button>
                            </div>

                            <nav className="flex flex-col px-4 py-4 gap-2 text-sm text-[#264117]">
                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Entrar
                                </Link>
                                <Link
                                    to="/cadastro"
                                    onClick={closeMenu}
                                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Cadastre-se
                                </Link>
                            </nav>
                        </div>
                    </>
                )}
            </header>
        );
    }

    // Conteúdo da navbar logada
    if (usuario.token !== "") {
        component = (
            <header className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-[#264117]">
                    {/* Logo */}
                    <Link
                        to="/home"
                        className="text-2xl font-semibold flex justify-center gap-2 text-[#264117]"
                        title="GoTogether"
                        onClick={closeMenu}
                    >
                        <img
                            className="h-18"
                            src="https://imgur.com/p62Wicv.png"
                            alt="logo"
                        />
                    </Link>

                    {/* Links desktop */}
                    <nav className="hidden md:flex gap-8 text-[15px]">
                        <Link
                            to="/home"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/home"
                            )}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/viagens"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/viagens"
                            )}`}
                        >
                            Viagens
                        </Link>
                        <Link
                            to="/veiculos"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/veiculos"
                            )}`}
                        >
                            Veículos
                        </Link>
                    </nav>

                    {/* Ações à direita (desktop) */}
                    <div className="hidden md:flex gap-8">
                        <Link
                            to="/perfil"
                            className={`hover:text-yellow-700 transition ${isActive(
                                "/perfil"
                            )}`}
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

                    {/* Botão menu mobile */}
                    <button
                        className="md:hidden p-2 text-[#264117]"
                        onClick={openMenu}
                        aria-label="Abrir menu"
                    >
                        <ListIcon size={28} weight="bold" />
                    </button>
                </div>

                {/* MENU MOBILE LOGADO */}
                {menuState === "open" && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Drawer */}
                        <div className="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg md:hidden flex flex-col">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                                <span className="text-[#264117] font-semibold">Menu</span>
                                <button
                                    className="p-2 text-[#264117]"
                                    onClick={closeMenu}
                                    aria-label="Fechar menu"
                                >
                                    <XIcon size={24} weight="bold" />
                                </button>
                            </div>

                            <nav className="flex flex-col px-4 py-4 gap-2 text-sm text-[#264117]">
                                <Link
                                    to="/home"
                                    onClick={closeMenu}
                                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/viagens"
                                    onClick={closeMenu}
                                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Viagens
                                </Link>
                                <Link
                                    to="/veiculos"
                                    onClick={closeMenu}
                                    className="px-3 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Veículos
                                </Link>

                                <div className="mt-4 border-t border-gray-200 pt-4 flex flex-col gap-2">
                                    <Link
                                        to="/perfil"
                                        onClick={closeMenu}
                                        className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
                                    >
                                        <UserIcon size={18} />
                                        <span>Perfil</span>
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-left"
                                    >
                                        <SignOutIcon size={18} />
                                        <span>Sair</span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </>
                )}
            </header>
        );
    }

    return <>{component}</>;
}

export default Navbar;
