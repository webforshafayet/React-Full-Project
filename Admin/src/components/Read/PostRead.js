import React from "react";
import "./Read.css";
import { PostContext } from "../UserContext/PostContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostRead = () => {
  const [users, setUser] = useContext(PostContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>Tittle: {user[0].tittle}</h1>
      <h1>Post: {user[0].post}</h1>
      <h1>Comment: {user[0].comment}</h1>
       
      <Link to="/postlist">
        <Button variant="info">
          Back to Postlist
        </Button>
      </Link>
    </div>
  );
};

export default PostRead;