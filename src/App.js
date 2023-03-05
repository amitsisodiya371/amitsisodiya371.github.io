import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import  Projects from './components/Projects';
import { Contact } from "./components/Contact";
import { Github } from './components/github';
import About from "./components/About"
import { Footer } from "./components/Footer";
import AllRoutes from './components/Allroutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <About />
       <Skills/>
       <Github/>
      <Projects /> 
      <Contact />
      <Footer />
      <AllRoutes />

    </div>
  );
}

export default App;
