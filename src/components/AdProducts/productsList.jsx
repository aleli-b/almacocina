
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


export const ProductList = () => {
    const [products, setProducts] = useState();
    useEffect(() => { getProducts() }, []);

    const getProducts = async () => {
        const products = await axios.get('http://localhost:3001/products');
        setProducts(products.data);
    }

    
    async function delProducts(id) {
        if (window.confirm(`Estás por eliminar el producto ${id}`)){
            await axios.delete(`http://localhost:3001/products/${id}`);
            const prods = await axios.get(`http://localhost:3001/products`);
            setProducts(prods.data)
        }
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Producto</th>
                        <th>Info</th>
                        <th>URL</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product =>
                        (
                            <tr key={product._id}>
                                <td>1</td>
                                <td>{product.name}</td>
                                <td>{product.info}</td>
                                <td>{product.url}</td>
                                <td><Button className='bg-danger' onClick={() => delProducts(product._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}