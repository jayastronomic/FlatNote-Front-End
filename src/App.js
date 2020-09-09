import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.js'



const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> 
      </div>
    </Router>
  );
}

export default App;
