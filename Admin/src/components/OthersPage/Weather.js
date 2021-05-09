//import React from 'react';
import "./Weather.css";
import { Button, Table,Card } from "react-bootstrap";
import React, { useContext } from "react";
 
import { Link } from "react-router-dom";
 

const Weather = () => {
    return (
        <div>
            <Card className="bg-dark text-dark">
  
  <Card.ImgOverlay>
    <h1>Weather Update</h1>
    <Card.Text>
       Today is a sunny day...<h1>35 degree</h1>
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>




    );
     
};

export default Weather;