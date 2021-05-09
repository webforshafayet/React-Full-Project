//import React from 'react';
import "./Massage.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { MassageContext } from "../UserContext/MassageContext";
import { Link } from "react-router-dom";
import MassageCreate from "../Create/MassageCreate"
import Navbar from '../Navbar/Navbar';
 

const Massagelist = () => {
    const [users, setUser] = useContext(MassageContext);
    return (
        <div>
           
             
          
            <h1>Massage</h1>
             
                <Table striped bordered hover>
        <thead>
          <tr>
             
             
             
             
             
            {/* <th>Action</th> */}
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
             <th>User</th>
              <td>{user.m1}</td>
               
              <th>Admin</th>
              <td>{user.m2}</td>

               
              
            
 

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
                <MassageCreate />


                
        </div>

        
    );
};

export default  Massagelist;