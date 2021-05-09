import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostContext } from "../UserContext/PostContext";
import "./Edit.css";
import { useState } from "react";

const PostEdit = () => {
  const [users, setUser] = useContext(PostContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [tittle, settittle] = useState(user[0].tittle);
  const [post, setpost] = useState(user[0].post);
  const [comment, setcomment] = useState(user[0].comment);
 
  

  const edittittle = (e) => {
    settittle(e.target.value);
    const edited_tittle = tittle;
    user[0].tittle = edited_tittle;
  };

  const editpost = (e) => {
    setpost(e.target.value);
    const edited_post = post;
    user[0].post = edited_post;
  };

  const editcomment = (e) => {
    setcomment(e.target.value);
    const edited_comment = comment;
    user[0].comment = edited_comment;
  };


  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Tittle</Form.Label>
          <Form.Control
            type="text"
            name="tittle"
            value={tittle}
            onChange={edittittle}
            placeholder={user[0].tittle}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post</Form.Label>
          <Form.Control
            type="text"
            name="post"
            // value={password}
            onChange={editpost}
            placeholder={user[0].post}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            name="comment"
            // value={email}
            onChange={editcomment}
            placeholder={user[0].comment}
          />
        </Form.Group>

 
        <Link to="/postlist">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit Post
          </Button>
          <Button className="action_btn" variant="info">
            Back to Post list
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default PostEdit;