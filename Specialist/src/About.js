import React, { Component } from 'react';

class About extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

 
  render() {

   return (
    <div className="container">
      <div className="py-4">
        <h1>About Us</h1>
        <p className="lead">
         welcome our webside !!! A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well
        </p>

        <p className="lead">
         What sets us apart as a company is that we want to deal with anyone that owns our product, regardless of where you bought it. If you have an issue with a product and come to us with your issue, we'll help you resolve your issue
        </p>
        <p className="lead">Happy customers are your biggest advocates and can become your most successful sales team.</p>
      </div>
    </div>
    );
  }

  
}

export default About;
