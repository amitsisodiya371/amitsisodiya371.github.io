import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
      <Skills/>
    <Resume/>
    </div>
  );
}

export default App;