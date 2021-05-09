import React, { Component } from 'react';

class Help_center extends Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

 
  render() {

   return (
    <div className="container">
      <div className="py-4">
        <h1>Help_center </h1>
        <p className="lead">
        Thank you for believing us..
        </p>

        <p className="lead">
        If you have any problems you can contact us.
        <h4></h4><a >Tasnim: 01829561585</a>
        <h4></h4><a >Mishu 01829561586</a>
        <h4></h4><a >Shafayat 01829561587</a>
        </p>
        <p className="lead">You can also messaging us through email.
    <h4>Email</h4><a href="email.php">tasnim@gmail.com</a>
    <h4></h4><a href="email.php">mishu@gmail.com</a>
    <h4></h4><a href="email.php">shafayat@gmail.com</a></p>
    
      </div>
    </div>
    );
  }

  
}

export default Help_center;
