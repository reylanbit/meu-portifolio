import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import EvolucaoSection from './sections/EvolucaoSection';
import ProfissionalSection from './sections/ProfissionalSection';
import ConhecimentoSection from './sections/ConhecimentoSection';
import CriativoSection from './sections/CriativoSection';
import SocialSection from './sections/SocialSection';

export default function App() {
  return (
    <>
      <a href="#evolucao" className="sr-only" style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
        Pular para o conteudo
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <EvolucaoSection />
        <ProfissionalSection />
        <ConhecimentoSection />
        <CriativoSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
