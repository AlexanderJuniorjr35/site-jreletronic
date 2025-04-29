import React, { useState } from "react";
import logo from "./assets/logo-v2.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main className="min-h-screen bg-[#b0fc04] text-gray-800 scroll-smooth">
      {/* Navbar Responsiva */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-95 text-[#b0fc04] py-4 shadow-md z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="Logo JR Eletronic" className="h-10" /> 
          </a>

          {/* Botão hambúrguer */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-[#b0fc04]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuAberto ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="#home" className="hover:underline">Início</a>
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <nav className="md:hidden px-4 mt-4 space-y-2 flex flex-col text-sm font-semibold text-center">
            <a href="#home" className="hover:underline" onClick={() => setMenuAberto(false)}>Início</a>
            <a href="#servicos" className="hover:underline" onClick={() => setMenuAberto(false)}>Serviços</a>
            <a href="#sobre" className="hover:underline" onClick={() => setMenuAberto(false)}>Sobre</a>
            <a href="#contato" className="hover:underline" onClick={() => setMenuAberto(false)}>Contato</a>
          </nav>
        )}
      </header>

      {/* Compensar navbar fixa */}
      <div className="pt-24" />

      <section id="home" className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Soluções em Manutenção e Montagem de Computadores</h2>
        <p className="text-lg text-gray-600 mb-6">
          Roteadores, Switches, PCs e muito mais com qualidade e confiança.
        </p>
        <a
          href="#contato"
          className="bg-black text-[#b0fc04] px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Fale Conosco
        </a>
      </section>

      <section id="servicos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-10">Nossos Serviços</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Manutenção de Computadores", icon: "🛠️" },
              { title: "Montagem de PCs", icon: "🖥️" },
              { title: "Configuração de Roteadores", icon: "📡" },
              { title: "Instalação de Switches", icon: "🔌" },
              { title: "Limpeza e Otimização", icon: "🧹" },
              { title: "Formatação e Backup", icon: "💾" },
              { title: "Landing Page", icon: "🌐" },
              { title: "Chatbot", icon: "🤖" },
              { title: "Suporte Remoto", icon: "🧑‍💻" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-3xl font-semibold mb-6">Sobre Nós</h3>

          <p className="text-lg text-gray-600 mb-6">
            A <strong>JR Eletronic</strong> é uma empresa especializada em serviços de Tecnologia da Informação, com foco na qualidade, inovação e no atendimento personalizado.
            Atuamos com excelência no suporte técnico e infraestrutura de redes, oferecendo soluções completas e sob medida para pessoas e empresas.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Nosso maior diferencial é a equipe altamente qualificada, com profissionais experientes, treinados e comprometidos em entregar os melhores resultados para o seu negócio.
            Utilizamos os recursos mais modernos disponíveis no mercado, garantindo eficiência na execução dos serviços e a satisfação de nossos clientes e colaboradores.
          </p>

          <h4 className="text-2xl font-semibold mt-10 mb-4">🔧 Suporte Técnico a Computadores</h4>
          <p className="text-lg text-gray-600 mb-6">
            Diagnóstico e solução de problemas de hardware e software, manutenção preventiva e corretiva, upgrades, backup, remoção de vírus,
            atendimento remoto e domiciliar, além de orientações personalizadas para melhor uso dos equipamentos.
          </p>

          <h4 className="text-2xl font-semibold mt-10 mb-4">🌐 Landing Page</h4>
          <p className="text-lg text-gray-600 mb-6">
           Criação de páginas otimizadas, modernas e responsivas para divulgar seu negócio ou serviço. Ideal para captar leads, apresentar sua marca e melhorar sua presença online com foco em performance e conversão.
          </p>

          <h4 className="text-2xl font-semibold mt-10 mb-4">🤖 Chatbot</h4>
          <p className="text-lg text-gray-600 mb-6">Desenvolvimento de assistentes virtuais personalizados para atendimento automático via WhatsApp, sites ou redes sociais. Atenda seus clientes 24h por dia, otimize processos e melhore a experiência do usuário.</p>

          <h4 className="text-2xl font-semibold mt-10 mb-4">📡 Infraestrutura de Redes</h4>
          <p className="text-lg text-gray-600 mb-6">
            Projetos e serviços com cabeamento estruturado, redes wireless, configuração de VPN, switches, roteadores, cable modems e
            monitoramento proativo dos ativos de rede para reduzir falhas e garantir o desempenho ideal.
          </p>

          <h4 className="text-2xl font-semibold mt-10 mb-4">Nosso Compromisso</h4>
          <p className="text-lg text-gray-600">
            Estamos prontos para ajudar sua empresa a crescer com tecnologia de ponta, suporte técnico confiável e uma infraestrutura robusta e segura.
            Com a JR Eletronic, você tem a tranquilidade de contar com quem entende de TI.
          </p>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl font-semibold text-center mb-6">Entre em Contato</h3>
          <p className="text-center mb-8 text-gray-600">
            Empresas interessadas em terceirizar nossos serviços, preencha o formulário abaixo. Entraremos em contato o mais breve possível.
          </p>

          <form
            action="https://formsubmit.co/sac@jreletronic.com"
            method="POST"
            className="bg-white p-6 rounded-xl shadow space-y-4"
          >
            <input type="hidden" name="_subject" value="Novo Contato pelo Site - JR Eletronic" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://jreletronic.com/obrigado.html" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Nome da Empresa</label>
                <input type="text" name="empresa" className="w-full border rounded-lg px-3 py-2" placeholder="Ex: Tech Solutions Ltda" required />
              </div>
              <div>
                <label className="block font-medium mb-1">Responsável</label>
                <input type="text" name="responsavel" className="w-full border rounded-lg px-3 py-2" placeholder="Nome completo" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">E-mail</label>
                <input type="email" name="email" className="w-full border rounded-lg px-3 py-2" placeholder="empresa@email.com" required />
              </div>
              <div>
                <label className="block font-medium mb-1">Telefone</label>
                <input type="tel" name="telefone" className="w-full border rounded-lg px-3 py-2" placeholder="(00) 00000-0000" required />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Serviço Desejado</label>
              <select name="servico" className="w-full border rounded-lg px-3 py-2" required>
                <option value="">Selecione um serviço</option>
                <option>Manutenção de Computadores</option>
                <option>Montagem de PCs</option>
                <option>Configuração de Roteadores</option>
                <option>Instalação de Switches</option>
                <option>Suporte Técnico Terceirizado</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Mensagem</label>
              <textarea name="mensagem" className="w-full border rounded-lg px-3 py-2 h-28" placeholder="Escreva os detalhes da sua necessidade..." required></textarea>
            </div>

            <button type="submit" className="bg-[#b0fc04] text-black px-6 py-3 rounded-lg shadow hover:opacity-80 transition w-full font-semibold">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} JR Eletronic. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
