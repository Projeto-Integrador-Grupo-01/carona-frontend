import React from "react";
import { motion } from "framer-motion";

const GITHUB_REPO_URL = "https://github.com/Projeto-Integrador-Grupo-01/carona-frontend";
const TECH_SISTERS_SITE = "https://projeto-integrador-grupo-01.github.io/techsisters/"; // ajuste

const Footer = () => {
  return (
    <footer className="bg-[#264117] text-white pt-10 pb-6 relative overflow-hidden">

      {/* Glow suave no fundo */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

      <motion.div
        className="relative mx-auto max-w-6xl px-6 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* LOGO / NOME */}
        <motion.h2
          className="text-xl md:text-2xl font-semibold tracking-wide"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          GoTogether
        </motion.h2>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium opacity-90">
          <a
            href="#terms"
            className="transition-all hover:text-[#d6f2d7] hover:tracking-wide duration-200"
          >
            Terms of Use
          </a>
          <a
            href="#contact"
            className="transition-all hover:text-[#d6f2d7] hover:tracking-wide duration-200"
          >
            Contact
          </a>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all hover:text-[#d6f2d7] hover:tracking-wide duration-200"
          >
            {/* Ícone GitHub minimalista */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.88 10.96.58.11.79-.25.79-.55v-1.87c-3.17.69-3.83-1.35-3.83-1.35-.48-1.29-1.17-1.63-1.17-1.63-.96-.74.07-.73.07-.73 1.13.08 1.72 1.17 1.72 1.17 1 1.76 2.63 1.25 3.27.95.1-.73.38-1.24.68-1.53-2.53-.28-5.19-1.27-5.19-5.65 0-1.25.44-2.28 1.17-3.07-.12-.29-.51-1.45.11-3 0 0 .95-.3 3.13 1.17a10.95 10.95 0 0 1 5.77 0c2.18-1.47 3.14-1.17 3.14-1.17.62 1.55.23 2.71.11 3 .73.79 1.17 1.82 1.17 3.07 0 4.39-2.67 5.36-5.21 5.63.39.34.76 1.04.76 2.14v2.52c0 .31.2.67.8.55A10.54 10.54 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Linha divisória elegante */}
        <div className="w-full border-t border-white/30 mt-4 opacity-50"></div>

        {/* COPY FINAL */}
        <div className="text-center text-xs opacity-90 mt-3">
          Desenvolvido por{" "}
          <a
            href={TECH_SISTERS_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 decoration-white/60 hover:text-[#d6f2d7] transition-colors duration-200"
          >
            Tech Sisters
          </a>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;











// import { useContext, type ReactNode } from "react"
// import { AuthContext } from "../../contexts/AuthContext"
// import { Link } from "react-router-dom";

// function Footer() {

//     let year = new Date().getFullYear()
//     const { usuario } = useContext(AuthContext);
//     let component: ReactNode;

//     if (usuario.token !== "") {
//         component = (
//             <footer className="bg-[#28353F] text-white py-12">
//                 <div className="max-w-6xl mx-auto px-6 flex  gap-10">
//                     <div>
//                         <img className="h-14 w-14" src="https://i.imgur.com/oZkNh1Y.png" alt="GoTogether Logo" />
                        
                        
//                         <p className="text-sm leading-relaxed text-gray-400 max-w-[60%]">
//                             <h2 className="text-xl font-semibold text-white mb-2 mt-4">GoTogether</h2>
//                             Mobilidade inteligente dentro da sua empresa. Compartilhe o caminho, multiplique conexões.
//                         </p>
//                     </div>
//                     <div>
//                         <h3 className="text-lg font-medium text-white mb-3">Links Rápidos</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li><Link to="/home" className="hover:text-white text-gray-300">Home</Link></li>
//                             <li><Link to="/viagens" className="hover:text-white text-gray-300">Viagens</Link></li>
//                             <li><Link to="/veiculos" className="hover:text-white text-gray-300">Veiculos</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
//                     © {year} GoTogether. Todos os direitos reservados.
//                 </div>
//             </footer>
//         )
//     }

//     return (
//         <>
//             {component}
//         </>
//     )
// }

// export default Footer