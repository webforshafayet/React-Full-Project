//import React from 'react';
import "./Home.css";
import Navbar from '../Navbar/Navbar';

import { Button, Table , Media } from "react-bootstrap";
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
 
 
const Home = () => {

    
    return (
        <div>
            <Media>
  {/* <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  /> */}
  <Media.Body>
    <h5>Agropedia - Online Agricultural Information Resource
January 30, 2009</h5>
     
    <p>
     
Agropedia, an online repository of agricultural information in India, is now available for agricultural extension workers and students. Described as an audiovisual encyclopedia, the site has a virtual library of information, blogs, and question and answer fora. Initially, nine crops are featured - rice, wheat, chickpea, pigeon pea, vegetable pea, lychee, sugarcane, groundnut, and sorghum.

The site is sponsored by the National Agricultural Innovation Project of the Indian Council of Agricultural Research.
    </p>

    <Media>
      {/* <img
        width={64}
        height={64}
        className="mr-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      /> */}
      <Media.Body>
        <h5>Agropedia is an online knowledge repository</h5>
        <p>
        Agropedia is an online knowledge repository for information related to agriculture in India. It includes universal meta models and localized content for a variety of users with appropriate interfaces built in collaborative mode in multiple languages.[clarification needed] This national portal, designed as an "agricultural Wikipedia" hosts wide range of agricultural information on a variety of crops, with an aim to empower farmers with crop information.
        </p>
      </Media.Body>


      <Media.Body>
        <h5>Agropedia is an online knowledge repository</h5>
        <p>
        Agropedia is an online knowledge repository for information related to agriculture in India. It includes universal meta models and localized content for a variety of users with appropriate interfaces built in collaborative mode in multiple languages.[clarification needed] This national portal, designed as an "agricultural Wikipedia" hosts wide range of agricultural information on a variety of crops, with an aim to empower farmers with crop information.
        </p>
      </Media.Body>


      <Media.Body>
        <h5>Agropedia is an online knowledge repository</h5>
        <p>
        Agropedia is an online knowledge repository for information related to agriculture in India. It includes universal meta models and localized content for a variety of users with appropriate interfaces built in collaborative mode in multiple languages.[clarification needed] This national portal, designed as an "agricultural Wikipedia" hosts wide range of agricultural information on a variety of crops, with an aim to empower farmers with crop information.
        </p>
      </Media.Body>


      <Media.Body>
        <h5>Agropedia is an online knowledge repository</h5>
        <p>
        Agropedia is an online knowledge repository for information related to agriculture in India. It includes universal meta models and localized content for a variety of users with appropriate interfaces built in collaborative mode in multiple languages.[clarification needed] This national portal, designed as an "agricultural Wikipedia" hosts wide range of agricultural information on a variety of crops, with an aim to empower farmers with crop information.
        </p>
      </Media.Body>
      
    </Media>
    
  </Media.Body>
</Media>





</div>
        

    );
     
};

export default Home;