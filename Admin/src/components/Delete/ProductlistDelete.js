import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductlistContext } from "../UserContext/ProductlistContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const ProductlistDelete = () => {
  const [users, setUser] = useContext(ProductlistContext); 
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
          <Link to="/productlist">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deleteUser(id)} variant="danger">
              Delete Product
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ProductlistDelete;