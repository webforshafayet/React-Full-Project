import React from "react";
import "./Read.css";
import { AdminProfileContext } from "../UserContext/AdminProfileContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminProfileRead = () => {
  const [users, setUser] = useContext(AdminProfileContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>Username: {user[0].username}</h1>
      <h1>password: {user[0].password}</h1>
      <h1>Email: {user[0].email}</h1>
      <h1>Fullname: {user[0].fullname} </h1>
      <h1>Nationality: {user[0].nationality}</h1>
      <h1>Address: {user[0].address}</h1>
      <h1>Education: {user[0].education}</h1>
      <h1>Experience: {user[0].experience}</h1>
      <Link to="/profile">
        <Button variant="info">
          Back to Admin Profile
        </Button>
      </Link>
    </div>
  );
};

export default AdminProfileRead;