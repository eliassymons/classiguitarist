import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Lessons from "./components/Lessons";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header /> <Socials />
      <Hero />
      <Lessons />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}

export default App;
