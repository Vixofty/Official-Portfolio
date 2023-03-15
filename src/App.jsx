import React from 'react';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>     
        <Route path="/proyects">
          <Proyects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Profile/>
        </Route>  
      </Switch>
    </Router>
  )
}

export default App