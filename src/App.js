import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/">
             <Login />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
