//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { ProductlistContext } from "../UserContext/ProductlistContext";
import { Link } from "react-router-dom";
 

const Productlist = () => {
    const [users, setUser] = useContext(ProductlistContext);
    return (
        <div>
            <h1>Product list</h1>
             
       
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>product ID</th>
      
            <th>Seller Name</th>
            <th>Description</th>
            <th>Total cost</th>
            <th>Action</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.sellername}</td>
              <td>{user.description}</td>
              <td>{user.cost}</td>

              
              <Link to={"/productdelete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete Product
                </Button>
                </Link>
             

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
        </div>
    );
};

export default  Productlist;