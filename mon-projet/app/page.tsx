//import Nav from './components/Nav';
import HomePage from './components/Home';
import About from './components/About';
//import Skills from './components/Skills';
//import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div>
      

      <main className="bg-black text-white w-full">
        <HomePage />
        <About />
        <Contact />
       

      </main>
      
      <Footer /> 
    </div>
  );
}
