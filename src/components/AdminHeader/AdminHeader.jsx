import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

export const AdminHeader = ({ sendProduct }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='d-flex justify-content-center'>
            <Button variant='submit' className='button align-self-end' onClick={handleShow}>
                <p className='text-center'>
                    <span>Agrega Productos</span>
                </p>
            </Button>
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
                    {/* <Form onSubmit={handleSubmit(sendProduct)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del Producto</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Breve descripcion del producto</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type='submit' variant="primary">Agregar</Button>
                    </Form> */}
                    <form onSubmit={handleSubmit(sendProduct)}>
                        <input type="text" placeholder="Nombre del Producto" {...register("name", { required: true, minLength: 3, maxLength: 24 })} /> {errors.name && <p>Error en el nombre</p>}
                        <input type="text" placeholder='URL de la imagen' {...register("url", { required: true })} />{errors.url && <p>Error en la URL</p>}
                        <input type="text" placeholder="Descripcion" {...register("description", { required: true, minLength: 30 })} /> {errors.description && <p>Error en la descripcion</p>}
                        <input type="text" placeholder="Info" {...register("info", { required: true, minLength: 30 })} /> {errors.info && <p>Error en la info</p>}
                        <input type="text" placeholder="Precio" {...register("price", { required: true })} /> {errors.price && <p>Error en el precio</p>}
                        <input type="submit" />
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
