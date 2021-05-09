import React from "react";
import "./Read.css";
import { V_SellerContext } from "../UserContext/V_SellerContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const V_SellerRead = () => {
  const [users, setUser] = useContext(V_SellerContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>NID: {user[0].nid}</h1>
      <h1>Username: {user[0].username}</h1>
      <h1>password: {user[0].password}</h1>
      <h1>Email: {user[0].email}</h1>
      <h1>Fullname: {user[0].fullname} </h1>
      <h1>Nationality: {user[0].nationality}</h1>
      <Link to="/V_Sellerlist">
        <Button variant="info">
          Back to Verified Sellerlist
        </Button>
      </Link>
    </div>
  );
};

export default V_SellerRead;