import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';
import SpotlightBackground from './components/SpotlightBackground';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './sections/HeroSection';
import EvolucaoSection from './sections/EvolucaoSection';
import ProfissionalSection from './sections/ProfissionalSection';
import ConhecimentoSection from './sections/ConhecimentoSection';
import CriativoSection from './sections/CriativoSection';
import SocialSection from './sections/SocialSection';

export default function App() {
  return (
    <>
      <a href="#evolucao" className="sr-only">
        Pular para o conteudo
      </a>
      <CustomCursor />
      <MouseTrail />
      <SpotlightBackground />
      <ScrollProgress />
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
