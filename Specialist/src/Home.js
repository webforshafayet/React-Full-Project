import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

 
  render() {

    return (
          <div className="App">
            
            <h4>Home</h4>
            <p>Welcome Home!!!</p>
             
                <li>
                    <Link to='/Profile'>View Profile</Link>
                  </li>

                   <li>
                    <Link to='/product_data'>View Product</Link>
                  </li>
                  

                  <li>
                    <Link to='/About'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/Contact'>Contact Us</Link>
                  </li>
                  <li>
                    <Link to='/Help_center'>Help_Center</Link>
                  </li>
                  <li>
                    <Link to='/logout'>Logout</Link>
                  </li>




          </div>



      
    );
  }

  
}

export default Home;
