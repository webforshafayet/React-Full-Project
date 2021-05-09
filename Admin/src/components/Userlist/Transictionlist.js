//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { TransictionContext } from "../UserContext/TransictionContext";
import { Link } from "react-router-dom";
 

const Transictionlist = () => {
    const [users, setUser] = useContext(TransictionContext);
    return (
        <div>
            <h1>Transiction list</h1>
             
       
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>product ID</th>
            <th>Date</th>
            <th>Seller Name</th>
            <th>Buyer Name</th>
            <th>Quantity</th>
            <th>Total cost</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.date}</td>
              <td>{user.sellername}</td>
              <td>{user.buyername}</td>
              <td>{user.quantity}</td>
              <td>{user.cost}</td>
             

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
        </div>
    );
};

export default  Transictionlist;