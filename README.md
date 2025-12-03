<div align="center"> <a href="https://git.io/typing-svg"> <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=00C853&center=true&vCenter=true&width=850&lines=GoTogether+–+Aplicativo+de+Caronas+Compartilhadas!" alt="Typing SVG" /> </a> </div>

<div align="center">
  <img src="https://ik.imagekit.io/vvkjumzbj/WhatsApp%20Image%202025-10-29%20at%2009.53.24.jpeg?updatedAt=1761742457173" alt="GoTogether Preview" width="500" />
</a>
</div>

<div align="center">

[![Java](https://img.shields.io/badge/Java-17-%23ED8B00?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.0-%236DB33F?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-%233178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-%2306B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-%234479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

</div>

---

<div align="left">

## 🚗 1. Descrição

O **GoTogether** é uma plataforma de **Corporate Ridesharing** (carona corporativa) desenvolvida como projeto integrador. A solução conecta colaboradores de uma mesma empresa que realizam trajetos semelhantes, promovendo a mobilidade sustentável, a redução de custos com transporte e o fortalecimento da cultura ESG nas organizações.

A proposta é oferecer uma alternativa inteligente e colaborativa para o deslocamento diário, onde funcionários podem compartilhar caronas de forma segura, econômica e ambientalmente responsável.

---

## 🎯 2. Propósitos

| Propósito | Descrição |
|-----------|-----------|
| **Mobilidade** | Facilitar o deslocamento dos colaboradores com soluções de carona compartilhada |
| **Custos** | Reduzir gastos individuais e corporativos com transporte |
| **Adesão ESG** | Promover práticas sustentáveis alinhadas às políticas ambientais, sociais e de governança |

---

## ⚙️ 3. Descrição do Sistema

O sistema foi desenvolvido com foco em três pilares principais:

| Funcionalidade | Descrição |
|----------------|-----------|
| **CRUD** | Gerenciamento completo de usuários, viagens e veículos |
| **Segurança** | Autenticação e autorização para garantir a proteção dos dados |
| **Estimativa** | Cálculo de rotas, custos e economia proporcionada pelas caronas |

---

## 🗃️ 4. Estrutura do Banco de Dados

O sistema utiliza três tabelas principais:

```
📦 Database
├── tb_usuarios    → Cadastro e dados dos colaboradores
├── tb_viagens     → Registro das caronas e trajetos
└── tb_veiculos    → Informações dos veículos cadastrados
```

---

## 🛠️ 5. Tecnologias Utilizadas

### Backend

| Item | Tecnologia |
|------|------------|
| **Linguagem** | Java 17 |
| **Framework** | Spring Boot |
| **Banco de Dados** | MySQL |
| **Documentação API** | Swagger |
| **Testes de API** | Insomnia |
| **Versionamento** | Git + GitHub |

### Frontend

| Item | Tecnologia |
|------|------------|
| **Biblioteca** | React |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS |
| **IDE** | VS Code |
| **Gerenciador de Dependências** | npm |
| **Versionamento** | Git + GitHub |

---

## 🎨 6. Identidade Visual

```css
/* Paleta de cores da marca */
--verde-principal: #264117;    /* Sustentabilidade e natureza */
--coral-acolhimento: #e0a98a;  /* Acolhimento e conexão */
--teal-confianca: #679398;     /* Confiança e segurança */
--laranja-energia: #c97240;    /* Energia e movimento */
```

| Cor | Significado |
|-----|-------------|
| 🟢 Verde `#264117` | Sustentabilidade |
| 🟠 Coral | Acolhimento |
| 🔵 Azul | Confiança |
| 🟧 Laranja | Energia |

---

## 📁 7. Organização do Projeto

```
/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/gotogether/
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       ├── service/
│   │   │   │       └── security/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── usuarios/
│   │   │   ├── viagens/
│   │   │   └── veiculos/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── models/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 💡 8. Impactos

<div align="center">

| 🌱 Sustentabilidade | 💰 Economia | 🤝 Colaboração |
|:-------------------:|:-----------:|:--------------:|
| Redução da emissão de CO₂ | Divisão de custos de combustível | Fortalecimento de vínculos entre colaboradores |
| Menos veículos nas ruas | Economia em estacionamento | Networking corporativo |
| Práticas ESG | Redução de gastos da empresa | Cultura organizacional positiva |

</div>

---

## 🔮 9. Implementações Futuras

- **Escalabilidade** → Expansão para múltiplas empresas e regiões
- **Integração com RH** → Conexão com sistemas de gestão de pessoas
- **Acessibilidade** → Recursos para garantir inclusão de todos os colaboradores

---

## 🏆 10. Desafios e Soluções

| Desafio | Solução |
|---------|---------|
| Relacionamentos entre entidades | Modelagem cuidadosa do banco de dados |
| Testes | Implementação de testes unitários e de integração |
| Atenção aos detalhes | Code review e pair programming |
| Trabalho em equipe | Metodologia ágil com Scrum |

---

## 🚀 11. Configuração e Execução

### Backend

```bash
# Clone o repositório
git clone https://github.com/Projeto-Integrador-Grupo-01/gotogether_backend.git

# Acesse a pasta do projeto
cd gotogether_backend

# Execute a aplicação
./mvnw spring-boot:run
```

### Frontend

```bash
# Clone o repositório
git clone https://github.com/Projeto-Integrador-Grupo-01/gotogether_frontend.git

# Acesse a pasta do projeto
cd gotogether_frontend

# Instale as dependências
npm install

# Execute a aplicação
npm run dev
```

---

<div align="center">

## 🙌 Equipe

Desenvolvido com 💚 por [Tech Sisters](https://projeto-integrador-grupo-01.github.io/techsisters/) 🍃

**Turma Java 83**

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/alineromanini">
        <img src="https://github.com/alineromanini.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Aline Romanini"/>
        <br/><sub><b>Aline Romanini</b></sub>
        <br/><sub>Scrum Master</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cdouradom">
        <img src="https://github.com/cdouradom.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Cintia Dourado"/>
        <br/><sub><b>Cintia Dourado</b></sub>
        <br/><sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/nicollyjesus">
        <img src="https://github.com/nicollyjesus.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Nicolly Jesus"/>
        <br/><sub><b>Nicolly Jesus</b></sub>
        <br/><sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LemesdeMorais">
        <img src="https://github.com/LemesdeMorais.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Rafaela Lemes"/>
        <br/><sub><b>Rafaela Lemes</b></sub>
        <br/><sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/queren-alves">
        <img src="https://github.com/queren-alves.png?size=100" width="100" style="border-radius:50%; border:2px solid #264117;" alt="Quéren Alves"/>
        <br/><sub><b>Quéren Alves</b></sub>
        <br/><sub>Tester</sub>
      </a>
    </td>
  </tr>
</table>

---

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=264117&center=true&vCenter=true&width=600&lines=Agradecemos+pela+atenção!" alt="Typing SVG" />

</div>
</div>
