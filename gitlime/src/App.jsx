import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}
