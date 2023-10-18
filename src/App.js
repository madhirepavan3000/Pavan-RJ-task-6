import Navbar from "./components/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/project"
import './App.css';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Intro/>
      <Projects />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;