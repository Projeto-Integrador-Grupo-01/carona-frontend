import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleLogin(usuarioLogin);
  }

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-yellow-700 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-yellow-700/10 after:rounded-xl"
      : "text-gray-700 px-3 py-2 ";

  return (
    <>
      <div className="w-full bg-white border-gray-200 shadow-sm sticky top-0 z-50">
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
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
            Bem-vindo(a) de volta
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Entre na sua conta para continuar
          </p>

          <form className="flex flex-col gap-4" onSubmit={login}>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-gray-700">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="seuemail@email.com"
                value={usuarioLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:ring-gray-700 focus:border-gray-700 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="senha" className="text-sm text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="••••••••"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-0 focus:ring-gray-700 focus:border-gray-700 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 transition text-white font-medium py-2 rounded-md mt-2 flex justify-center items-center cursor-pointer"
            >
              {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Entrar</span>}
            </button>

          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-gray-600 hover:underline font-medium">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login