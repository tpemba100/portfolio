import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Intro from './components/Intro';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
