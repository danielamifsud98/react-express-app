import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Question from './pages/Question';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Switch>
            <Route path='/' component ={HomePage} exact/>
            <Route path='/question/:number' component={Question} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
