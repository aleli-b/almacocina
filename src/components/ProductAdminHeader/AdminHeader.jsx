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
                    <Modal.Title>Agregar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(sendProduct)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Nombre</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Nombre del Producto" {...register("name", { required: true, minLength: 3, maxLength: 24 })} /> {errors.name && <p>Error en el nombre</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">URL</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="URL de la Imagen" {...register("url", { required: true })} />{errors.url && <p>Error en la URL</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Precio</label>
                            <input type="number" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Precio del Producto" {...register("price", { required: true })} /> {errors.price && <p>Error en el precio</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Descripción</label>
                            <textarea className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Descripción del Producto" {...register("description", { required: true, minLength: 30 })} /> {errors.description && <p>Error en la descripcion</p>}                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Info</label>
                            <textarea className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Más Información" {...register("info", { required: true, minLength: 30 })} /> {errors.info && <p>Error en la info</p>}
                        </div>                        
                        <button type="submit" className="btn btn-primary">Agregar</button>                        
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
