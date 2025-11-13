export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#095170] to-black">
        <div className="absolute inset-0 opacity-50 ">
          <div className="absolute inset-0 bg-[url('/src/assets/img/heroimg.jpg')] animate-pulse bg-no-repeat bg-cover bg-center"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in">
          Bi2B: <span className="text-[#FF0000]">Inteligência</span> para sua Gestão
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Soluções completas em consultoria, dados e gestão contábil que transformam seu negócio.
        </p>
        <button
          onClick={scrollToServices}
          className="bg-[#FF0000] text-white px-8 py-4 rounded-none text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider animate-fade-in-delay-2"
        >
          Conheça nossas soluções
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
