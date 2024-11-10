import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Services">Services</section>
    <section id="Protafolio">Parallax</section>
    <section id="About">Portafolio</section>
    <section id="Donation">Portafolio</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
