import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
