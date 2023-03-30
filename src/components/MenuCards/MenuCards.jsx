import React, { useState, useEffect } from 'react';
import '../../styles/Carta.css';
import { BsFillCartFill } from "react-icons/bs"
import { Button, Card, Container, Row, Col, Fade } from 'react-bootstrap';
import axios from 'axios';
import { useCart } from '../context/Cart';
import { useAuth } from '../context/AuthContext';

export const MenuCards = () => {
    const { addProduct } = useCart();
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts() }, []);
    const auth = useAuth();

    const handleClick = (id) => {
        setOpen(open => ({
            ...open,
            [id]: !open[id],
        }))
    }

    async function getProducts() {
        const users = await axios.get('http://localhost:3001/products');
        setProducts(users.data);
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={12} md={6} className="d-flex flex-row flex-wrap justify-content-center gap-3">
                        {
                            products.map(product => (
                                <Card style={{ width: '18rem' }} key={product._id} className="menuCard">
                                    <Card.Img variant="top" src={product.url} className="cardImg" />
                                    <Card.Body className='cardBody'>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Container fluid className='d-flex justify-content-between mb-2'>
                                            <Button
                                                onClick={() => handleClick(product._id)}
                                                aria-controls="example-fade-text"
                                                aria-expanded={open[product._id]}
                                                className="cardButton"
                                            >
                                                + info
                                            </Button>
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
                                        <div style={{ minHeight: '150px' }}>
                                            <Fade in={open[product._id]} dimension="width">
                                                <div id="example-fade-text">
                                                    <Card body >
                                                        {product.info}
                                                    </Card>
                                                </div>
                                            </Fade>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
