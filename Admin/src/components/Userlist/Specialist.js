//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { SpecialistContext } from "../UserContext/SpecialistContext";
import { Link } from "react-router-dom";
 

const Specialist = () => {
    const [users, setUser] = useContext(SpecialistContext);
    return (
        <div>
            <h1>Specialist</h1>
             
        <Link to="/specialistcreate">
        <Button className="create__btn" variant="primary">
          Create Specialist
        </Button>
      </Link>
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
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

              <Link to={"/specialistread/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/specialistedit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>

                <Link to={"/specialistdelete/"+user.id}>
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

export default  Specialist;