import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Perfil from "./pages/perfil/Perfil"
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
import ViagemDetalhe from "./components/viagem/viagemdetalhe/ViagemDetalhe"
import LandingPage from "./pages/landingpage/LandingPage"
import ListaVeiculos from "./components/veiculo/listaveiculos/ListaVeiculos"
import FormVeiculo from "./components/veiculo/formveiculo/FormVeiculo"
import DeletarVeiculo from "./components/veiculo/deletarveiculo/DeletarVeiculo"
import ListaViagens from "./components/viagem/listaviagens/ListaViagens"
import FormViagem from "./components/viagem/formviagem/FormViagem"
import DeletarViagem from "./components/viagem/deletarviagem/DeletarViagem"
import "leaflet/dist/leaflet.css";

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/veiculos" element={<ListaVeiculos />} />
              <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
              <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
              <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
              <Route path="/viagens" element={<ListaViagens partidaFiltro={null} destinoFiltro={null} />} />
              <Route path="/cadastrarviagem" element={<FormViagem />} />
              <Route path="/editarviagem/:id" element={<FormViagem />} />
              <Route path="/deletarviagem/:id" element={<DeletarViagem />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/atualizarperfil" element={<AtualizarPerfil />} />
              <Route path="/viagem/:id" element={<ViagemDetalhe />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App