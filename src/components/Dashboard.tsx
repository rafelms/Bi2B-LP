export default function Resultados() {
  return (
    // Removi min-h-screen para a seção se ajustar ao conteúdo
    <section id="dashboard" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* O título da seção foi mantido */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
            — Nossos Resultados
          </h2>
          {/* Cor azul atualizada para o novo tom */}
          <p className="text-[#0d6084] text-lg uppercase tracking-widest">
            Dashboard interativo
          </p>
          <p className="text-gray-400 text-xl mt-4">
            Melhor manejo de análise de dados para decisões mais assertivas.
          </p>
        </div>

        {/* QUADRO PARA O DASHBOARD*/}
        {/* Removi o 'h-50px' que estava quebrando o layout */}
        <div className="w-full mx-auto">
          
          {/* MODIFICAÇÃO DE ALTURA RESPONSIVA:
            - Removido: style={{ paddingTop: '45%' }}
            - Adicionado: pt-[100%] (para mobile, proporção 1:1, mais alto)
            - Adicionado: md:pt-[56.25%] (para desktop, proporção 16:9)
          */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-2xl border border-white/10 pt-[100%] md:pt-[56.25%]">
            <iframe
              title="Dashboard Bi2B - Amostra Comercial"
              className="absolute top-0 left-0 w-full h-full"
              src="https://app.powerbi.com/view?r=eyJrIjoiZTYxNzQ5MjktYWZkMS00M2ZhLTg3YzAtMWE1ZWM0ZmJiMzE0IiwidCI6IjAwZTBjNDIzLTk2MzYtNGM0Mi1hMTMwLTlhNWI1YjQwYzg3YiJ9"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
}