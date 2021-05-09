//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { FeedbackContext } from "../UserContext/FeedbackContext";
import { Link } from "react-router-dom";
 

const Feedbacklist = () => {
    const [users, setUser] = useContext(FeedbackContext);
    return (
        <div>
            <h1>Feedback list</h1>
             
       
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>User Name</th>
            <th>Feedback</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.date}</td>
              <td>{user.username}</td>
              <td>{user.feedback}</td>
              
             

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
        </div>
    );
};

export default  Feedbacklist;