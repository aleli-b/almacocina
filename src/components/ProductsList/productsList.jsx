
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { EditProductHeader } from '../ProductAdminHeader/EditProductHeader';
import './style.css'

export const ProductList = ({ products, getProducts, editProducts }) => {
    const editProd = editProducts;

    async function delProducts(id) {
        await axios.delete(`http://localhost:3001/products/${id}`);
        getProducts();
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Producto</th>
                        <th>Info</th>
                        <th>Descripción</th>
                        <th>URL</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, i) =>
                        (
                            <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.info}</td>
                                <td>{product.description}</td>
                                <td>{product.url}</td>                                
                                <td><Button className='bg-danger' onClick={() => delProducts(product._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>                                
                                <td><EditProductHeader product={product} editProducts={editProd} ></EditProductHeader></td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}