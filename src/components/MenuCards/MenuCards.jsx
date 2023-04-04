import React, { useState, useEffect } from 'react';

import '../../styles/Carta.css';
import { BsFillCartFill } from "react-icons/bs"
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useCart } from '../context/Cart';
import { useAuth } from '../context/AuthContext';
import ModalInfoCArd from '../ModalInfoCArd/ModalInfoCArd';
export const MenuCards = () => {
    const { addProduct } = useCart();
    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts() }, []);
    const auth = useAuth();

    async function getProducts() {
        const users = await axios.get('http://localhost:3001/products');
        setProducts(users.data);
    };

    return (
        <>
            <div>
                <Container>
                    <h1 className=" display-4  text-danger  text-center">
                        {' '}
                        Nuestra Carta
                    </h1>
                    <hr />

                    <h5 className="text-center p-4 fst-italic ">
                        "Garantía en el mundo de la gastronomia, con el mejor servicio"
                    </h5>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg={12} md={6} className="d-flex flex-row flex-wrap justify-content-center gap-3">
                            {products.map(product => (
                                <Card style={{ width: '18rem' }} key={product._id} className="menuCard ">
                                    <Card.Img variant="top" src={product.url} className="cardImg shadow" />
                                    <Card.Body className='cardBody shadow'>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.price}
                                        </Card.Text>
                                        <Container fluid className='d-flex justify-content-between '>
                                            <ModalInfoCArd product={product}>

                                            </ModalInfoCArd>
                                            {auth.user
                                                ?
                                                <Button className='cardButton' onClick={() => addProduct(product)}>
                                                    <BsFillCartFill />
                                                </Button>
                                                :
                                                <Button className='cardButton' disabled onClick={() => addProduct(product)}>
                                                    <BsFillCartFill />
                                                </Button>}
                                        </Container>
                                    </Card.Body>
                                </Card>

                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )







}

export default MenuCards;



