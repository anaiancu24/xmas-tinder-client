import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'
import LogoutPage from './components/auth/LogoutPage'
import TopBar from './components/TopBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
            <TopBar  />
          </nav>
          <main className="marginTop">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />
 

          </main>
        </div>
      </Router>
    );
  }
}

export default App;