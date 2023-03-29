import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

export const AdminHeader = ({ editUser, user }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const editUserLocal = (newUserData) => {
        editUser(newUserData, user._id)
    }

    return (
        <div className='d-flex justify-content-center'>
            <Button onClick={() => handleShow()}><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(editUserLocal)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Nombre</label>
                            <input defaultValue={user.name} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Nombre" {...register("name", { required: true, minLength: 3, maxLength: 8 })} /> {errors.name && <p>Error en el nombre</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Apellido</label>
                            <input defaultValue={user.lastName} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Apellido" {...register("lastName", { required: true, minLength: 3, maxLength: 10 })} /> {errors.lastName && <p>Error en el apellido</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Email</label>
                            <input defaultValue={user.email} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Mail" {...register("email", { required: true, minLength: 8, maxLength: 30 })} /> {errors.email && <p>Error en el mail</p>}
                        </div>                                               
                        <button type="submit" className="btn btn-primary">Submit</button>                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
