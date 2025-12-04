<div align="center">   <a href="https://git.io/typing-svg">     <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=264117&center=true&vCenter=true&width=850&lines=GoTogether+Frontend+–+Interface+Web+Responsiva!" alt="Typing SVG" />   </a> </div> <div align="center">   <img src="https://ik.imagekit.io/vvkjumzbj/WhatsApp%20Image%202025-10-29%20at%2009.53.24.jpeg?updatedAt=1761742457173" alt="GoTogether Preview" width="500" /> </div> <div align="center">

[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-%233178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) [![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-%2306B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/) [![Vite](https://img.shields.io/badge/Vite-5.0-%23646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>



------

## 📋 Sumário

- [Sobre o Projeto](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-sobre-o-projeto)
- [Tecnologias](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-tecnologias)
- [Estrutura do Projeto](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-estrutura-do-projeto)
- [Páginas e Funcionalidades](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-páginas-e-funcionalidades)
- [Componentes Principais](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-componentes-principais)
- [Modelos de Dados](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-modelos-de-dados)
- [Identidade Visual](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-identidade-visual)
- [Pré-requisitos](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-pré-requisitos)
- [Instalação](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-instalação)
- [Scripts Disponíveis](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-scripts-disponíveis)
- [Equipe](https://claude.ai/chat/dfb16726-c9fa-4139-9b85-fec13be0ceaf#-equipe)

------

## 🚀 Sobre o Projeto

O **GoTogether** é uma plataforma de **Corporate Ridesharing** (carona corporativa) desenvolvida como projeto integrador. A solução conecta colaboradores de uma mesma empresa que realizam trajetos semelhantes, promovendo a mobilidade sustentável, a redução de custos com transporte e o fortalecimento da cultura ESG nas organizações.

A proposta é oferecer uma alternativa inteligente e colaborativa para o deslocamento diário, onde funcionários podem compartilhar caronas de forma segura, econômica e ambientalmente responsável.

---

## Principais Características

 ✅ Interface moderna e responsiva<br>
 ✅ Tipagem forte com TypeScript<br>
 ✅ Componentização reutilizável<br>
 ✅ Integração completa com API REST<br>
 ✅ Autenticação e autorização seguras<br>
 ✅ Design system consistente com Tailwind CSS<br>

------

## 🎯 Propósitos

| Propósito      | Descrição                                                    |
| -------------- | ------------------------------------------------------------ |
| **Mobilidade** | Facilitar o deslocamento dos colaboradores com soluções de carona compartilhada |
| **Custos**     | Reduzir gastos individuais e corporativos com transporte     |
| **Adesão ESG** | Promover práticas sustentáveis alinhadas às políticas ambientais, sociais e de governança |

------

## 🛠️ Tecnologias

| Tecnologia       | Versão | Descrição                                |
| ---------------- | ------ | ---------------------------------------- |
| **React**        | 18.2.0 | Biblioteca para construção de interfaces |
| **TypeScript**   | 4.9.5  | Superset JavaScript com tipagem estática |
| **Tailwind CSS** | 3.3.0  | Framework CSS utility-first              |
| **Vite**         | 5.0    | Build tool e dev server ultra-rápido     |
| **React Router** | 6.x    | Roteamento e navegação                   |
| **Axios**        | 1.x    | Cliente HTTP para consumo da API         |

------

## 📁 Estrutura do Projeto

```
gotogether_frontend/
├── public/                    # Arquivos estáticos
├── src/
│   ├── assets/               # Imagens, ícones e recursos
│   │
│   ├── components/           # Componentes reutilizáveis
│   │   ├── banner/          # Componente de banner principal
│   │   ├── beneficios/      # Cards de benefícios da plataforma
│   │   ├── equipe/          # Seção sobre a equipe
│   │   ├── footer/          # Rodapé da aplicação
│   │   ├── navbar/          # Barra de navegação
│   │   ├── veiculo/         # Componentes de veículos
│   │   ├── viagem/          # Componentes de viagens
│   │   └── contexts/        # Context API para estado global
│   │
│   ├── models/              # Interfaces TypeScript
│   │   ├── Usuario.ts       # Modelo de usuário
│   │   ├── UsuarioLogin.ts  # Modelo de login
│   │   ├── Veiculo.ts       # Modelo de veículo
│   │   └── Viagem.ts        # Modelo de viagem
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── cadastro/        # Página de cadastro de usuário
│   │   ├── home/            # Página inicial/landing page
│   │   ├── landingpage/     # Landing page institucional
│   │   ├── login/           # Página de autenticação
│   │   └── perfil/          # Página de perfil do usuário
│   │
│   ├── services/            # Serviços e API
│   │   └── Service.ts       # Configuração do Axios e requisições
│   │
│   ├── utils/               # Funções utilitárias
│   │
│   ├── App.tsx              # Componente raiz
│   ├── App.css              # Estilos globais
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos base + Tailwind
│
├── .gitignore               # Arquivos ignorados pelo Git
├── eslint.config.js         # Configuração do ESLint
├── index.html               # HTML base
├── package.json             # Dependências e scripts
├── package-lock.json        # Lock de dependências
├── tsconfig.json            # Configuração do TypeScript
├── tsconfig.app.json        # Config TS para aplicação
├── tsconfig.node.json       # Config TS para Node
├── vite.config.ts           # Configuração do Vite
├── tailwind.config.js       # Config TS para Node
├── Termos_De_Uso.md         # Termos de Uso
└── README.md                # Documentação
```

------

## 📄 Páginas e Funcionalidades

### 🏠 Landing Page (`/`)

- Apresentação da plataforma
- Cards de benefícios (Economia, Acessibilidade, Conectividade, etc.)
- Seção sobre a equipe
- Call-to-action para cadastro

### 🔐 Login (`/login`)

- Autenticação de usuários
- Validação de credenciais
- Redirecionamento para dashboard

### 📝 Cadastro (`/cadastro`)

- Formulário de registro
- Validação de dados
- Criação de nova conta

### 👤 Perfil (`/perfil`)

- Visualização de dados do usuário
- Edição de informações pessoais
- Gerenciamento de conta

### 🏠 Home/Dashboard (`/home`)

- Dashboard do usuário autenticado
- Acesso rápido às funcionalidades
- Resumo de atividades

------

## 🧩 Componentes Principais

### 🎯 Banner

Componente de destaque na landing page com mensagem principal e call-to-action.

### 🎁 Benefícios

Cards ilustrando os 6 pilares da plataforma:

- 💰 Economia
- ♿ Acessibilidade
- 🔗 Conectividade
- 💡 Inovação
- 🌱 Sustentabilidade
- 🛡️ Segurança

### 🧭 Navbar

Barra de navegação responsiva com:

- Logo da marca
- Links de navegação
- Botões de autenticação
- Menu mobile

### 👥 Equipe

Seção apresentando os membros do time com:

- Fotos dos integrantes
- Nomes e funções
- Links para GitHub

### 🦶 Footer

Rodapé com informações institucionais e links úteis.

### 🚗 Veículo

Componentes para:

- Listagem de veículos
- Cadastro de novo veículo
- Edição de veículo
- Exclusão de veículo

### 🗺️ Viagem

Componentes para:

- Listagem de viagens disponíveis
- Criação de nova viagem
- Detalhes da viagem
- Solicitação de carona

------

## 📊 Modelos de Dados

### Usuario.ts

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto?: string;
  cpf: string;
  telefone: string;
  // ... outros campos
}
```

### UsuarioLogin.ts

```typescript
interface UsuarioLogin {
  email: string;
  senha: string;
  token?: string;
}
```

### Veiculo.ts

```typescript
interface Veiculo {
  id: number;
  modelo: string;
  placa: string;
  cor: string;
  capacidade: number;
  usuario: Usuario;
}
```

### Viagem.ts

```typescript
interface Viagem {
  id: number;
  origem: string;
  destino: string;
  data: string;
  horario: string;
  vagas: number;
  veiculo: Veiculo;
  usuario: Usuario;
}
```

------

## 🎨 Identidade Visual

### Paleta de Cores


| Cor                | Código    | Significado                         |
| ------------------ | --------- | ----------------------------------- |
| 🟢 Natureza         | `#4C7625` | Natureza e crescimento              |
| 🟠 Energia          | `#B04A1E` | Energia e movimento                 |
| 🌿 Sustentabilidade | `#2E4C16` | Sustentabilidade e responsabilidade |
| 🟧 Dinamismo        | `#DA792D` | Dinamismo e inovação                |

```css

/* Cores de Apoio */
--branco: #ffffff;
--cinza-claro: #f5f5f5;
--cinza-medio: #9ca3af;
--cinza-escuro: #374151;
```

---

### Tipografia

- **Fonte Principal:** Inter, sans-serif
- **Tamanhos:** Sistema de escala do Tailwind (text-sm, text-base, text-lg, etc.)

------

## ✅ Pré-requisitos | Configuração e Execução

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

------

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Projeto-Integrador-Grupo-01/gotogether_frontend.git
```

### 2. Acesse a pasta do projeto

```bash
cd gotogether_frontend
```

### 3. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:8080
```

### 5. Execute a aplicação

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará rodando em `http://localhost:5173`

------

## 📜 Scripts Disponíveis

| Script            | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Cria o build de produção             |
| `npm run preview` | Preview do build de produção         |
| `npm run lint`    | Executa o linter (ESLint)            |

------

## 🔗 Integração com Backend

O frontend consome a API REST do backend através do Axios. Todas as requisições são centralizadas no arquivo `services/Service.ts`.

**Base URL da API:** `http://localhost:8080` (configurável via `.env`)

### Principais Endpoints

- `POST /usuarios/cadastrar` - Cadastro de usuário
- `POST /usuarios/logar` - Login
- `GET /viagens` - Listar viagens
- `POST /viagens` - Criar viagem
- `GET /veiculos` - Listar veículos
- `POST /veiculos` - Cadastrar veículo

------

## 🧪 Testes

```bash
# Executar testes (quando implementado)
npm run test
```

------

## 📦 Build e Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy

O projeto pode ser facilmente deployado em:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

------

<div align="center">


## 🙌 Equipe

Desenvolvido com 💚 por [Tech Sisters](https://projeto-integrador-grupo-01.github.io/techsisters/) 🍃

**Turma Java 83**

<table align="center">   <tr>     <td align="center">       <a href="https://github.com/alineromanini">         <img src="https://github.com/alineromanini.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Aline Romanini"/>         <br/><sub><b>Aline Romanini</b></sub>         <br/><sub>Scrum Master</sub>       </a>     </td>     <td align="center">       <a href="https://github.com/cdouradom">         <img src="https://github.com/cdouradom.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Cintia Dourado"/>         <br/><sub><b>Cintia Dourado</b></sub>         <br/><sub>Tester</sub>       </a>     </td>     <td align="center">       <a href="https://github.com/nicollyjesus">         <img src="https://github.com/nicollyjesus.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Nicolly Jesus"/>         <br/><sub><b>Nicolly Jesus</b></sub>         <br/><sub>Desenvolvedora</sub>       </a>     </td>     <td align="center">       <a href="https://github.com/LemesdeMorais">         <img src="https://github.com/LemesdeMorais.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Rafaela Lemes"/>         <br/><sub><b>Rafaela Lemes</b></sub>         <br/><sub>Desenvolvedora</sub>       </a>     </td>     <td align="center">       <a href="https://github.com/queren-alves">         <img src="https://github.com/queren-alves.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Quéren Alves"/>         <br/><sub><b>Quéren Alves</b></sub>         <br/><sub>Desenvolvedora</sub>       </a>     </td>   </tr> </table>

------

### 🔗 Links Úteis

[![Portfolio](https://img.shields.io/badge/Portfolio-264117?style=for-the-badge&logo=github)](https://projeto-integrador-grupo-01.github.io/techsisters/) [![Backend](https://img.shields.io/badge/Backend-264117?style=for-the-badge&logo=github)](https://github.com/Projeto-Integrador-Grupo-01/gotogether_backend)

------

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=264117&center=true&vCenter=true&width=600&lines=Obrigada+pela+visita!+🚗💚" alt="Typing SVG" /> </div>
