import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ----------------------------------------

export default function Contact() {
  
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');


  // Lógica do botão flutuante do WhatsApp
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Função para atualizar o estado do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NOVO: Funções para mostrar o modal
  const showSuccessModal = (message: string) => {
    setModalType('success');
    setModalMessage(message);
    setShowModal(true);
  };

  const showErrorModal = (message: string) => {
    setModalType('error');
    setModalMessage(message);
    setShowModal(true);
  };

  // Função de envio do formulário (AGORA COM EMAILJS)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true); // Desabilita o botão

    // Verifica se as chaves foram preenchidas
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.error('EmailJS keys are not set. Please update the constants in the code.');
      showErrorModal('Erro de configuração. O envio não pôde ser feito.'); // Mostra modal de erro
      setIsSubmitting(false);
      return;
    }
    
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        showSuccessModal('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', company: '', email: '', phone: '', message: '', subject: '' });
      },
      (error) => {
        console.log('FAILED...', error.text);
        showErrorModal('Ops! Algo deu errado. Tente novamente mais tarde.');
      }
    )
    .finally(() => {
      setIsSubmitting(false); // Reabilita o botão
    });
  };

  return (
    <>
      <section ref={sectionRef} id="contato" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
              Inicie sua Transformação
            </h2>
            <p className="text-gray-400 text-xl">
              Entre em contato e agende uma conversa com nossos especialistas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            
            {/* --- Bloco Assunto --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Empresa"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg"
                />
              </div>
            </div>

            {/* --- Bloco Contato --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefone"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg"
                />
              </div>
            </div>

            {/* --- Bloco Mensagem --- */}
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Qual seu maior desafio hoje?"
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#FF0000] transition-colors duration-300 backdrop-blur-lg resize-none"
              ></textarea>
            </div>

            {/* --- Botão Enviar --- */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting} // Desabilita o botão ao enviar
                className="bg-[#FF0000] text-white px-12 py-4 hover:bg-red-700 transition-all duration-300 uppercase tracking-wider font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- BOTÃO FLUTUANTE WHATSAPP --- */}
      <a
        href="https://wa.me/+556392779310" // 👈 SEU NÚMERO
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#004a6e] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out
          ${isSectionVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
          }
        `}
      >
        <FaWhatsapp size={24} />
      </a>

      {/* --- NOVO MODAL DE FEEDBACK --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#161f22] border border-white/10 rounded-lg shadow-xl p-8 w-full max-w-md text-center">
            
            {/* Ícone (Sucesso ou Erro) */}
            <div className="mb-4">
              {modalType === 'success' ? (
                <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
              ) : (
                <FaTimesCircle className="text-red-500 text-6xl mx-auto" />
              )}
            </div>
            
            {/* Título */}
            <h3 className="text-2xl font-bold text-white mb-3">
              {modalType === 'success' ? 'Sucesso!' : 'Ocorreu um Erro'}
            </h3>
            
            {/* Mensagem */}
            <p className="text-gray-300 mb-6">
              {modalMessage}
            </p>

            {/* Botão Fechar */}
            <button
              onClick={() => setShowModal(false)}
              className={`px-8 py-3 rounded-md font-semibold text-white transition-colors duration-300
                ${modalType === 'success' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-[#FF0000] hover:bg-red-700'
                }
              `}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}