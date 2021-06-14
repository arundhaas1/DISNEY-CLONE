import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Login />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
