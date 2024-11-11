import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Sidebar />
      <Hero/>
    </section>
    <section id="Services"></section>
    <section id="Protafolio">Parallax</section>
    <section id="About">Portafolio</section>
    <section id="Donation">Portafolio</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
