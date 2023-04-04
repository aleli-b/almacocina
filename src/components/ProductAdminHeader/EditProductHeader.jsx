import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const EditProductHeader = ({ product, editProducts }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const editProductLocal = (newUserData) => {
        editProducts(newUserData, product._id)
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
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(editProductLocal)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Nombre</label>
                            <input defaultValue={product.name} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Nombre del Producto" {...register("name", { required: true, minLength: 3, maxLength: 24 })} /> {errors.name && <p>Error en el nombre</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">URL</label>
                            <input defaultValue={product.url} type="text" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="URL de la Imagen" {...register("url", { required: true })} />{errors.url && <p>Error en la URL</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Precio</label>
                            <input defaultValue={product.price} type="number" className="form-control" id="exampleInputText" aria-describedby="nameText" placeholder="Precio del Producto" {...register("price", { required: true })} /> {errors.price && <p>Error en el precio</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Descripción</label>
                            <textarea defaultValue={product.description} className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Descripción del Producto" {...register("description", { required: true, minLength: 30 })} /> {errors.description && <p>Error en la descripcion</p>}                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Info</label>
                            <textarea defaultValue={product.info} className="form-control" id="exampleInputTextarea" aria-describedby="nameText" placeholder="Más Información" {...register("info", { required: true, minLength: 30 })} /> {errors.info && <p>Error en la info</p>}
                        </div>                        
                        <button type="submit" className="btn btn-primary">Guardar</button>
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
