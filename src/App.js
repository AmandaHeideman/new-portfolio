import React, {useState} from 'react';
import MobileMenu from './components/MobileMenu';
import Navigation from './components/Navigation';
import About from './components/About';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <Navigation toggle={toggle}/>
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
