import { BarChart3, Users, Calculator, FileText, RefreshCw} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';  

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

function ServiceCard({ icon, title, description, highlight }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

 return (
    <div
      ref={cardRef}
      className={`group relative p-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        highlight
          /* Se for destaque (WhatsApp): Borda verde fixa e mantém verde no hover */
          ? 'bg-gradient-to-br from-green-500/10 to-transparent border-2 border-green-500 hover:border-green-500' 
          /* Se NÃO for destaque: Borda cinza padrão e fica AZUL no hover */
          : 'bg-white/5 border border-white/10 hover:border-blue-500'
      } backdrop-blur-lg hover:scale-105`} 
    >
      <div className={`text-4xl mb-6 ${
          highlight 
            ? 'text-green-500 group-hover:text-green-500' 
            : 'text-[#0d6084] group-hover:text-blue-500'
        } transition-colors duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            — Nossos Serviços
          </h2>
          <p className="text-[#004a6e] text-lg uppercase tracking-widest">
            para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<BarChart3 />}
            title="Análise de Dados, KPI e Indicadores"
            description="Suas decisões baseadas em fatos. Análise de dados e gestão de KPIs para guiar sua estratégia."
          />
          <ServiceCard
            icon={<Users />}
            title="Consultoria Empresarial"
            description="Soluções estratégicas para otimizar sua gestão e impulsionar o crescimento."
          />
          <ServiceCard
            icon={<Calculator />}
            title="Planejamento Tributário"
            description="Reestruturação do modelo de negócio visando redução da carga tributária."
          />
          <ServiceCard
            icon={<FileText />}
            title="Assessoria Mensal Contábil, Fiscal e Pessoal"
            description="Mantenha sua empresa em conformidade. Cuidamos de toda a rotina contábil, fiscal e pessoal."
          />
          <ServiceCard
            icon={<RefreshCw />}
            title="Recuperação Tributária"
            description="Recupere créditos tributários dos últimos 5 anos. Uma injeção de caixa segura para sua empresa."
          />
          <a href="https://wa.me/+556392779310" target="_blank" rel="noopener noreferrer" className="grid">
            <ServiceCard
              icon={<FaWhatsapp size={26} />}
              title="Fale com um Especialista"
              description="Agende um diagnóstico sem compromisso e descubra como podemos alavancar seu negócio."
              highlight              
            />
          </a>
        </div>
      </div>
    </section>
  );
}