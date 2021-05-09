import React from "react";
import "./Read.css";
import { SpecialistContext } from "../UserContext/SpecialistContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SpecialistRead = () => {
  const [users, setUser] = useContext(SpecialistContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>Username: {user[0].username}</h1>
      <h1>Password: {user[0].Password}</h1>
      <h1>Email: {user[0].email}</h1>
      <h1>Fullname: {user[0].fullname} </h1>
      <h1>Nationality: {user[0].nationality}</h1>
      <Link to="/Specialist">
        <Button variant="info">
          Back to Specialist
        </Button>
      </Link>
    </div>
  );
};

export default SpecialistRead;