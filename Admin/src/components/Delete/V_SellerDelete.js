import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { V_SellerContext } from "../UserContext/V_SellerContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const V_SellerDelete = () => {
  const [users, setUser] = useContext(V_SellerContext); 
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
          <Link to="/V_sellerlist">
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

export default V_SellerDelete;