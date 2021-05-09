import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SellerContext } from "../UserContext/SellerContext";
import "./Edit.css";
import { useState } from "react";

const SellerEdit = () => {
  const [users, setUser] = useContext(SellerContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [username, setusername] = useState(user[0].username);
  const [password, setpassword] = useState(user[0].password);
  const [email, setemail] = useState(user[0].email);
  const [fullname, setfullname] = useState(user[0].fullname);
  const [nationality, setnationality] = useState(user[0].nationality);
  

  const editusername = (e) => {
    setusername(e.target.value);
    const edited_username = username;
    user[0].username = edited_username;
  };

  const editpassword = (e) => {
    setpassword(e.target.value);
    const edited_password = password;
    user[0].password = edited_password;
  };

  const editemail = (e) => {
    setemail(e.target.value);
    const edited_email = email;
    user[0].email = edited_email;
  };

  const editfullname = (e) => {
    setfullname(e.target.value);
    const edited_fullname = fullname;
    user[0].fullname = edited_fullname;
  };

  const editnationality = (e) => {
    setnationality(e.target.value);
    const edited_nationality = nationality;
    user[0].nationality = edited_nationality;
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
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={editusername}
            placeholder={user[0].username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            // value={password}
            onChange={editpassword}
            placeholder={user[0].password}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            // value={email}
            onChange={editemail}
            placeholder={user[0].email}
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            // value={email}
            onChange={editfullname}
            placeholder={user[0].fullname}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            name="nationality"
            // value={email}
            onChange={editnationality}
            placeholder={user[0].nationality}
          />
        </Form.Group>
        <Link to="/sellerlist">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to sellerlist
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default SellerEdit;