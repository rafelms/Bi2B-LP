
// --- LISTA DE CLIENTES ---
const clientLogos = [
  { 
    name: "Cliente 1", 
    src: "./src/assets/img/nikelogo.png" 
  },
  { 
    name: "Cliente 2", 
    src: "./src/assets/img/paralanches.png" 
  },
  { 
    name: "Cliente 3", 
    src: "./src/assets/img/jplanches.jpg" 
  },
  { 
    name: "Cliente 4", 
    src: "./src/assets/img/cocacola.png" 
  },
  { 
    name: "Cliente 5", 
    src: "./src/assets/img/byddd.png" 
  },
  { 
    name: "Cliente 6", 
    src: "./src/assets/img/xiqxiq.png" 
  },
];


export default function Clients() {
  return (
    <section id="clientes" className="py-20 bg-black">
      <div className="py-20 bg-[radial-gradient(ellipse_at_center,_#004a6e_0%,_black_70%)]">
        
        {/* --- TÍTULO DA SEÇÃO --- */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos nossos parceiros e clientes que impulsionamos com dados e gestão inteligente.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
          
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center"
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}