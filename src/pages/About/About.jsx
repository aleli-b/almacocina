import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Hover.css' //import '../../styles/Login.css'
// import { FiInstagram, FiTwitter } from 'react-icons/fi'
// import { RiFacebookBoxLine } from 'react-icons/ri'
// import { LinksFooter } from '../../components/LinksFooter/LinksFooter';
import { Redes } from '../../components/Redes/Redes';
const imgAbout = require.context('../../assets/img/aboutImg', true);

export const About = () => {
  return (
    <div>
      <Container>
        <h1 className=" display-4  text-danger  text-center">
          {' '}
          Sobre Nosotros
        </h1>
        <hr />

        <h5 className="text-center p-4 fst-italic ">
          "Garantía en el mundo de la gastronomia, con el mejor servicio"
        </h5>
      </Container>
      {/* ###################################################### */}
      <Container className="container-fluid mb-5 ">
        <Row className="justify-content-around ">
          <Col sm={6} md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-2.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'> 
            <Redes/>
            </div> 
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Luciano Abraham{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK
            </Card.Text>
          </Col>


          {/* ###################################################### */}
          <Col sm={6} md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-3.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'> 
            <Redes/>
            </div> 
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Samanta Alamino{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK
            </Card.Text>
          </Col>
          <Col sm={6} md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-4.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'>
            <Redes/>
            </div>
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Francisco Gomez{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK
            </Card.Text>
          </Col>
          <Col sm={6}  md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-1.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'> 
            <Redes/>
            </div> 
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Marco Cornejo{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK
            </Card.Text>
          </Col>
          <Col sm={6}  md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-1.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'> 
            <Redes/>
            </div> 
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Alejandro Bardavid{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK 
            </Card.Text>
          </Col>

          </Row>
          
          </Container>
      <br />
      
    </div>
  )
};

export default About;
