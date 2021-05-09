//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { SellerContext } from "../UserContext/SellerContext";
import { Link } from "react-router-dom";
 

const Sellerlist = () => {
    const [users, setUser] = useContext(SellerContext);
    return (
        <div>
             <h1>Seller list</h1>
             
        <Link to="/sellercreate">
        <Button className="create__btn" variant="primary">
          Create Seller
        </Button>
      </Link>

      

                <Table striped bordered hover>
        <thead>
             
          <tr>
            <th>Seller ID</th>
            <th>Userame</th>
            <th>Password</th>
            <th>Email</th>
            <th>Fullname</th>
            <th>Nationality</th>
            <th>Action</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.fullname}</td>
              <td>{user.nationality}</td>

              <Link to={"/sellerread/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/selleredit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>

                <Link to={"/sellerdelete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
        </div>
    );
};

export default  Sellerlist;