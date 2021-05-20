import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Acme from './pages/projects/acme';
import API from './pages/projects/api';
import CustomerRegister from './pages/projects/customerRegister';
import Fakestore from './pages/projects/fakestore';
import Fakestore2 from './pages/projects/fakestore2';
import LisMelloParty from './pages/projects/lismelloparty';
import Memory from './pages/projects/memory';
import MongoDB from './pages/projects/mongoDB';
import MySQL from './pages/projects/MySQL';
import Portfolio from './pages/projects/portfolio';
import Quiz from './pages/projects/quiz';
import Slack from './pages/projects/slack';
import Stockmarket from './pages/projects/stockmarket';
import Yahtzee from './pages/projects/yahtzee';

function App() {
  return (
    <div className="grid">
      <Navigation />

      <Switch>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/projects/yahtzee">
          <Yahtzee />
        </Route>
        
        <Route path="/projects/quiz">
          <Quiz />
        </Route>
        
        <Route path="/projects/acme">
          <Acme />
        </Route>
        
        <Route path="/projects/portfolio">
          <Portfolio />
        </Route>
        
        <Route path="/projects/stockmarket">
          <Stockmarket />
        </Route>
        
        <Route path="/projects/customer-register">
          <CustomerRegister />
        </Route>
        
        <Route path="/projects/mysql">
          <MySQL />
        </Route>
        
        <Route path="/projects/mongodb">
          <MongoDB />
        </Route>
        
        <Route path="/projects/slack">
          <Slack />
        </Route>
        
        <Route path="/projects/fakestore">
          <Fakestore />
        </Route>
        
        <Route path="/projects/api">
          <API />
        </Route>
        
        <Route path="/projects/fakestore-2">
          <Fakestore2 />
        </Route>
        
        <Route path="/projects/memory">
          <Memory />
        </Route>
        
        <Route path="/projects/lismelloparty">
          <LisMelloParty />
        </Route>

        <Route path="/projects">
          <ProjectPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
