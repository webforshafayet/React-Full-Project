import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostContext } from "../UserContext/PostContext";


const PostCreate = () => {
  const [id, setId] = useState("");
  const [tittle, settittle] = useState("");
  const [post, setpost] = useState("");
  const [comment, setcomment] = useState("");
 

  const [users, setUser] = useContext(PostContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updatetittle = (e) => {
    settittle(e.target.value);
  };

  const updatepost = (e) => {
    setpost(e.target.value);
  };

  const updatecomment = (e) => {
    setcomment(e.target.value);
  };


  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id,  tittle:tittle,  post:post,  comment:comment}])
  }
 
  return (

     
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tittle</Form.Label>
          <Form.Control
            type="text"
            name="tittle"
            value={tittle}
            onChange={updatetittle}
            placeholder="Enter Tittle"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post</Form.Label>
          <Form.Control
            type="text"
            name="post"
            value={post}
            onChange={updatepost}
            placeholder="Enter Post"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            name="comment"
            value={comment}
            onChange={updatecomment}
            placeholder="Enter comment"
          />
        </Form.Group>

  
        <Button className="action_btn" variant="primary" type="submit">
          Create new post
        </Button>
        <Link to="/postlist">
          <Button className="action_btn" variant="info">
            Back to Postlist
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default PostCreate;