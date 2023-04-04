import React, { useState} from 'react';

import '../../styles/Carta.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



const ModalInfoCArd = ({product}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button onClick={handleShow}>
                                                + info
                                            </Button>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="fuente fw-bold">
              {product.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><h4>{product.description}</h4></Modal.Body>
          <img
            src={product.url}
            alt="imagen Producto"
            className="img-modal"
          ></img>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalInfoCArd;
