import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { V_UserContext } from "../UserContext/V_UserContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const V_Delete = () => {
  const [users, setUser] = useContext(V_UserContext); 
  const { id } = useParams();

  const deleteUser = (id) => {
    const user = users.filter((user) => user.id != id);
    setUser([...user]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/V_userlist">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default V_Delete;