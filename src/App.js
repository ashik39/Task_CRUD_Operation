import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Home from './components/Home';
import CreateUser from './components/Create';
import EditUser from './components/Edit';

function App() {
  return (
    <div className="App">
      <div className="container">
        <GlobalProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={CreateUser} />
              <Route path="/edit/:id" component={EditUser} />
            </Switch>
          </Router>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
