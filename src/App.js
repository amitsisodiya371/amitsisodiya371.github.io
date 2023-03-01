import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Contact/>
      <Projects/>
      <Skills/>
    <Resume/>
    </div>
  );
}

export default App;