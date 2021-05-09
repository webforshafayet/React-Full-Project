import React from "react";
import "./Read.css";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      
      
      <h1>Username: {user[0].username}</h1>
      <h1>password: {user[0].password}</h1>
      <h1>Email: {user[0].email}</h1>
      <h1>Fullname: {user[0].fullname} </h1>
      <h1>Nationality: {user[0].nationality}</h1>
      <Link to="/userlist">
        <Button variant="info">
          Back to Userlist
        </Button>
      </Link>
    </div>
  );
};

export default Read;