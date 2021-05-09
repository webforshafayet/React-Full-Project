//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { V_UserContext } from "../UserContext/V_UserContext";
import { Link } from "react-router-dom";
 

const V_Userlist = () => {
    const [users, setUser] = useContext(V_UserContext);
    return (
        <div>
            <h1>Verifed User list</h1>
             
        <Link to="/V_create">
        <Button className="create__btn" variant="primary">
          Create Verified User
        </Button>
      </Link>
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User NID</th>
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
              <td>{user.nid}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.fullname}</td>
              <td>{user.nationality}</td>

              <Link to={"/V_read/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/V_edit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>

                <Link to={"/V_delete/"+user.id}>
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

export default  V_Userlist;