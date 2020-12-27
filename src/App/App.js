import React, { useState } from 'react';
import './App.css';

// Import Tools
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Nav from '../components/Nav';
import Home from '../Home/Home';
import Kiteboarding from '../Kiteboarding/Kiteboarding';
import Webdevelopment from '../Webdevelopment/Webdevelopment';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../components/Footer';
import Contact from '../Contact/Contact';




function App() {

  const [contactModal, setContactModal] = useState(false)

  // const isModalHandle = () => {
  //   setContactModal(true)
  // }

  return (
    <Router>
      <div>
        <Nav />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/Kiteboarding" exact component={Kiteboarding } />
          <Route path="/Webdevelopment" exact component={Webdevelopment} />
          <Route path="/Portfolio" exact component={Portfolio} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer/>
        {contactModal && <ContactModal setContactModal={setContactModal}/>}
      </div>
    </Router>
  );
}



export default App;
