import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/works';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars';


function App() {
  return (
    <main className="relative z-0 bg-primary w-full min-h-screen">
      <div className="relative w-full">
        <Navbar />
        <Hero />
      </div>


      <div className="relative z-10 pointer-events-auto">
        <About />
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-[#915eff] to-transparent my-20 opacity-50' />
        <Experience />
      </div>
      <div className="relative z-0">
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-[#915eff] to-transparent my-20 opacity-50' />
        <Works />
        <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-[#915eff] to-transparent my-40 opacity-50' />
        <Contact />
      </div>
      <StarsCanvas />
    </main>
  );
}

export default App;