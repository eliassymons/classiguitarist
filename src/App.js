import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Lessons from "./components/Lessons";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Suzuki from "./components/Suzuki";
import Benefits from "./components/Benefits";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header /> <Socials />
      <Hero />
      <Lessons />
      <Video />
      <Testimonials />
      <About />
      <Contact />
      <Suzuki />
      <Benefits />
    </div>
  );
}

export default App;
