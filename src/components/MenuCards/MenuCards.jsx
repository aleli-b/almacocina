import React, { useState, useEffect } from 'react';
import '../../styles/Carta.css';
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs"
import { Button, Card, Container, Row, Col, Fade } from 'react-bootstrap';
import axios from 'axios';


export const MenuCards = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => { getUsers() }, []);

    const handleClick = (id) => {
        setOpen(open => ({
            ...open,
            [id]: !open[id],
        }))
    }

    async function getUsers() {
        const users = await axios.get('http://localhost:3001/products');
        setUsers(users.data);
    }

    async function delUsers(id) {
        await axios.delete(`http://localhost:3001/products/${id}`);
        const prods = await axios.get('http://localhost:3001/products');
        setUsers(prods.data);
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={12} md={6} className="d-flex flex-row flex-wrap justify-content-center gap-3">
                        {
                            users.map(user => (
                                <Card style={{ width: '18rem'}} key={user._id} className="menuCard">
                                    <Card.Img variant="top" src={user.url} className="cardImg" />
                                    <Card.Body className='cardBody'>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            {user.description}
                                        </Card.Text>
                                        <Container fluid className='d-flex justify-content-between mb-2'>
                                            <Button
                                                onClick={() => handleClick(user._id)}
                                                aria-controls="example-fade-text"
                                                aria-expanded={open[user._id]}
                                                className="cardButton"
                                            >
                                                + info
                                            </Button>
                                            <Button className='cardButton'>
                                                <BsFillCartFill />
                                            </Button>
                                            <Button className='cardButton' onClick={() => delUsers(user._id)} >
                                                <BsFillTrashFill />
                                            </Button>
                                        </Container>
                                        <div style={{ minHeight: '150px' }}>
                                            <Fade in={open[user._id]} dimension="width">
                                                <div id="example-fade-text">
                                                    <Card body >
                                                        {user.info}
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
