import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProofBar from './components/ProofBar/ProofBar';
import TechStackStrip from './components/TechStack/TechStackStrip';
import TheSystem from './components/TheSystem/TheSystem';
import TheProblem from './components/TheProblem/TheProblem';
import SeeItWorking from './components/SeeItWorking/SeeItWorking';
import Industries from './components/Industries/Industries';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProofBar />
        <TechStackStrip />
        <TheSystem />
        <TheProblem />
        <SeeItWorking />
        <Industries />
      </main>
    </div>
  );
}
