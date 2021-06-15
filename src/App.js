import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import Detailzero from './Detail/Detailzero'
import Detailone from './Detail/Detailone'
import Detailtwo from'./Detail/Detailtwo'
import Detailthree from './Detail/Detailthree'
import Detailfour from './Detail/Detailfour'
import Detailfive from './Detail/Detailfive'
import Detailsix from './Detail/Detailsix'
import Detailseven from './Detail/Detailseven'
import Detaileight from './Detail/Detaileight'
import Detailnine from './Detail/Detailnine'
import Detailten from './Detail/Detailten'
import Detaileleven from './Detail/Detaileleven'
import Detailtwele from './Detail/Detailtwele'
import Detailthirteen from './Detail/Detailthirteen'
import Detailfourteen from './Detail/Detailfourteen'
import Detailfifteen from './Detail/Detailfifteen'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>


            <Route path="/detailzero">
              <Header/>
              <Detailzero />
            </Route>
            <Route path="/detailone">
              <Header/>
              <Detailone />
            </Route>
            <Route path="/detailtwo">
              <Header/>
              <Detailtwo />
            </Route>
            <Route path="/detailthree">
              <Header/>
              <Detailthree />
            </Route>
            <Route path="/detailfour">
              <Header/>
              <Detailfour />
            </Route>
            <Route path="/detailfive">
              <Header/>
              <Detailfive />
            </Route>
            <Route path="/detailsix">
              <Header/>
              <Detailsix />
            </Route>
            <Route path="/detailseven">
              <Header/>
              <Detailseven />
            </Route>
            <Route path="/detaileight">
              <Header/>
              <Detaileight />
            </Route>
            <Route path="/detailnine">
              <Header/>
              <Detailnine />
            </Route>
            <Route path="/detailten">
              <Header/>
              <Detailten />
            </Route>
            <Route path="/detaileleven">
              <Header/>
              <Detaileleven />
            </Route>
            <Route path="/detailtwele">
              <Header/>
              <Detailtwele />
            </Route>
            <Route path="/detailthirteen">
              <Header/>
              <Detailthirteen />
            </Route>
            <Route path="/detailfourteen">
              <Header/>
              <Detailfourteen />
            </Route>
            <Route path="/detailfifteen">
              <Header/>
              <Detailfifteen />
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
