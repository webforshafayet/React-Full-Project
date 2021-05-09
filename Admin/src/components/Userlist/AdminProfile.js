//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { AdminProfileContext } from "../UserContext/AdminProfileContext";
import { Link } from "react-router-dom";
 

const AdminProfile = () => {
    const [users, setUser] = useContext(AdminProfileContext);
    return (
        <div>
            <h1>Admin Profile</h1>
            
       

                <Table striped bordered hover>
        <thead>
          <tr>
             
            <th>User NID</th>
            <th>Userame</th>
            <th>Password</th>
            <th>Email</th>
            <th>Fullname</th>
            {/* <th>Nationality</th>
            <th>Address</th>
            <th>Education</th>
            <th>Experience</th> */}
            <th>Action</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              
              <td>{user.nid}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.fullname}</td>
              {/* <td>{user.nationality}</td> */}

              <Link to={"/profileread/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read details
                  </Button>
                </Link>

                <Link to={"/profileedit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>

                

              </tr>))
            }   
                     
                     
                </tbody>
                </Table>
        </div>
    );
};

export default  AdminProfile;