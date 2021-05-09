import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Profile from './Profile'
import product_data from './product_data'
import cart from './cart'
import About from './About'
import Contact from './Contact'
import Help_center from './Help_center'
import Logout from './Logout'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
             
              <h1 className="App-title">Agriculture Site </h1>
            </header>
            

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            {!window.token?
            <span>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                   
                  
            </span>
              :
              <li><Link to='/logout'>Logout</Link></li>
          
          }
          </li>
            

          </ul>


          <div>
            <Route path='/' exact={true} component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/Profile' component={Profile} />
            <Route path='/product_data' component={product_data} />
            <Route path='/cart' component={cart} />

            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Help_center' component={Help_center} />
            

            
            <Route path='/logout' component={Logout} />
          </div>

          </div>


          

      </Router>
      
    );
  }
}

export default App;
