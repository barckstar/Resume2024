import "./app.scss";
import About from "./components/about/About";
import ContactForm from "./components/contactForm/ContactForm";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Repos from "./components/repos/Repos";
import Servicios from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import WorkExp from "./components/workExp/WorkExp";

const App = () => {
  return (
    <div>
      <Sidebar />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" title="About Me"/>        
      </section>
      <section id="About">
       <About />
      </section>
      <section>
        <WorkExp />
      </section> 
      <section id="Protafolio">
        <Parallax type="protafolio" title="My Work"/>
      </section>
      <section>
        <Repos />
      </section>
      <section id="Services">
        <Servicios/>
      </section>
      <section id="Contact">
        <ContactForm/>
      </section>
    </div>
  );
};

export default App;
