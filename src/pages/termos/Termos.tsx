function Termos() {
    
    return (
        <>
            

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 text-gray-800">
      {/* Título principal */}
      <h1 className="text-3xl font-bold border-b pb-2">Termos de Uso - GoTogether</h1>
      <p className="text-sm text-gray-500 font-semibold">Última atualização: Dezembro de 2025</p>

      {/* Seção */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar a plataforma <strong>GoTogether</strong>, você concorda com os presentes Termos de Uso.
          Se você não concordar com qualquer parte destes termos, não utilize a plataforma.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">2. Sobre a Plataforma</h2>
        <p>
          O <strong>GoTogether</strong> é uma plataforma de <strong>Corporate Ridesharing</strong> (carona corporativa) desenvolvida como projeto acadêmico
          pela turma Java 83 da Generation Brasil. A plataforma tem finalidade educacional e visa conectar colaboradores de empresas para compartilhar caronas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">3. Finalidade Acadêmica</h2>
        <p>
          Esta plataforma foi desenvolvida exclusivamente para fins acadêmicos e de aprendizado. Não se trata de um serviço comercial em operação.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">4. Cadastro e Conta de Usuário</h2>
        <h3 className="text-xl font-semibold mt-2">4.1 Elegibilidade</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>O usuário deve ter no mínimo 18 anos de idade</li>
          <li>É necessário fornecer informações verdadeiras e atualizadas no cadastro</li>
          <li>Cada usuário pode ter apenas uma conta ativa</li>
        </ul>

        <h3 className="text-xl font-semibold mt-2">4.2 Responsabilidades do Usuário</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Manter a confidencialidade da senha</li>
          <li>Não compartilhar sua conta com terceiros</li>
          <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
          <li>Atualizar seus dados cadastrais quando necessário</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">5. Uso da Plataforma</h2>

        <h3 className="text-xl font-semibold mt-2">5.1 Uso Permitido</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Cadastrar-se na plataforma</li>
          <li>Criar e gerenciar perfil de usuário</li>
          <li>Cadastrar veículos</li>
          <li>Oferecer e solicitar caronas</li>
          <li>Visualizar viagens disponíveis</li>
          <li>Interagir com outros usuários para compartilhar caronas</li>
        </ul>

        <h3 className="text-xl font-semibold mt-2">5.2 Uso Proibido</h3>
        <ul className="list-disc list-inside space-y-1 text-red-600">
          <li>Fornecer informações falsas ou enganosas</li>
          <li>Utilizar a plataforma para fins ilícitos</li>
          <li>Assediar, intimidar ou prejudicar outros usuários</li>
          <li>Tentar acessar áreas restritas do sistema</li>
          <li>Realizar engenharia reversa do código</li>
          <li>Comercializar o acesso à plataforma</li>
          <li>Utilizar bots ou scripts automatizados</li>
        </ul>
      </section>

      {/* Continuar adicionando seções seguindo o mesmo padrão... */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-1">14. Contato</h2>
        <p>📧 <a href="mailto:gotogether.projeto@gmail.com" className="text-blue-600 underline">gotogether.projeto@gmail.com</a></p>
        <p>🌐 <a href="https://github.com/Projeto-Integrador-Grupo-01" className="text-blue-600 underline">GitHub: Projeto Integrador Grupo 01</a></p>
        <p>👥 <a href="https://projeto-integrador-grupo-01.github.io/techsisters/" className="text-blue-600 underline">Equipe: Tech Sisters</a></p>
      </section>

      <div className="text-center mt-6 border-t pt-4 text-gray-500 text-sm">
        <p><strong>GoTogether - Corporate Ridesharing</strong></p>
        <p><em>Mobilidade Corporativa pela Qualidade de Vida</em> 🚗💼</p>
        <p>© 2024 Tech Sisters - Turma Java 83 - Generation Brasil</p>
        <p>Todos os direitos reservados para fins acadêmicos.</p>
      </div>
    </div>
        </>
    )
}

export default Termos;