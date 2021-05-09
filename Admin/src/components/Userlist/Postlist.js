//import React from 'react';
import "./Userlist.css";
import { Button, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { PostContext } from "../UserContext/PostContext";
import { Link } from "react-router-dom";
 

const Postlist = () => {
    const [users, setUser] = useContext(PostContext);
    return (
        <div>
          
            <h1>Post list</h1>
             
        <Link to="/postcreate">
        <Button className="create__btn" variant="primary">
          Create Post
        </Button>
      </Link>

      
     
       

                <Table striped bordered hover>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Post Tittle</th>
            <th>Post</th>
            <th>Comment</th>
             
            <th>Action</th>
          </tr>
        </thead>
                <tbody>
            {
                
                users.map((user) => (
              <tr>
              <td>{user.id}</td>
              <td>{user.tittle}</td>
              <td>{user.post}</td>
              <td>{user.comment}</td>
               

              <Link to={"/postread/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/postedit/"+user.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>

                <Link to={"/postdelete/"+user.id}>
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

export default  Postlist;