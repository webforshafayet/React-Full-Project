import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { V_SellerContext } from "../UserContext/V_SellerContext";


const V_SellerCreate = () => {
  const [id, setId] = useState("");
  const [nid, setnid] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [nationality, setnationality] = useState("");
  const [fullname, setfullname] = useState("");

  const [users, setUser] = useContext(V_SellerContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updatenid = (e) => {
    setnid(e.target.value);
    console.log(nid)
  };

  const updateusername = (e) => {
    setusername(e.target.value);
  };

  const updatepassword = (e) => {
    setpassword(e.target.value);
  };

  const updateemail = (e) => {
    setemail(e.target.value);
  };

  const updatefullname = (e) => {
    setfullname(e.target.value);
  };

  const updatenationality = (e) => {
    setnationality(e.target.value);
  };

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id, nid:nid, username:username, password:password, email:email, fullname:fullname, nationality:nationality}])
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
          <Form.Label>NID</Form.Label>
          <Form.Control
            type="text"
            name="nid"
            value={nid}
            onChange={updatenid}
            placeholder="Enter NID"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={updateusername}
            placeholder="Enter User Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={password}
            onChange={updatepassword}
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={updateemail}
            placeholder="Enter Email"
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={fullname}
            onChange={updatefullname}
            placeholder="Enter Fullname"
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            name="nationality"
            value={nationality}
            onChange={updatenationality}
            placeholder="Enter Nationality"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create Verified Seller
        </Button>
        <Link to="/V_sellerlist">
          <Button className="action_btn" variant="info">
            Back to Verified Sellerlist
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default V_SellerCreate;