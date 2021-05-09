import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MassageContext } from "../UserContext/MassageContext";


const Create = () => {
  
  const [m2, setm2] = useState("");
   

  const [users, setUser] = useContext(MassageContext);

   

  const updatem2 = (e) => {
    setm2(e.target.value);
  };

   

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {   m2:m2}])
  }
 
  return (

     
    <div className="create">
      <Form onSubmit={addUser}>
         
        <Form.Group>
          <Form.Label>Admin Massage</Form.Label>
          <Form.Control
            type="text"
            name="m2"
            value={m2}
            onChange={updatem2}
            placeholder="Enter Massage"
          />
        </Form.Group>
        


        
        <Button className="action_btn" variant="primary" type="submit">
          Massage
        </Button>
        <Link to="/Massagelist">
           
        </Link>
      </Form>
    </div>
  );
};

export default Create;