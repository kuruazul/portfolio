import './App.scss';
import AboutMe from './components/AboutMe';
import Experiece from './components/Experience';
import Hero from './components/Hero';
import SideNav from './components/SideNav';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Hero />
      <Experiece />
      <Skills />
      <SoftSkills />
      <AboutMe />
    </div>
  );
}

export default App;
