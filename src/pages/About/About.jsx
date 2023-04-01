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
      {/* <Container>
        <h1 className=" display-4  text-danger  text-center">
          {' '}
          Sobre Nosotros
        </h1>
        <hr />

        <h5 className="text-center p-4 fst-italic ">
          "Garantía en el mundo de la gastronomia, con el mejor servicio"
        </h5>
      </Container>
      <Container>
      <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={imgHome(`./img-home-1.jpg`)} alt="Avatar" style={{width:"300px",height:"300px"}}/>
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</Container> */}
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
            {/* <div class="icons">
                      <a href="../pages/error404.html">
                        <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="../pages/error404.html">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="../pages/error404.html">
                        <i class="fas fa-envelope"></i>
                      </a>
                    </div> */}
            </div> 
            </div>
            
            <Card.Title className="text-center text-danger  mt-2">
              Luciano Abraham{' '}
            </Card.Title>
            <Card.Text className="text-center fw-bold">
              FULL STACK
            </Card.Text>
          </Col>
          <Col sm={6} md={2} className="my-2">
            <div className="text-center imagen-hover .texto-hover">
              {' '}
              <img src={imgAbout(`./img-about-3.jpg`)}alt="" 
                className="imagen-hover rounded-circle" style={{width: "150px", height: "150px"}}
              />{' '}
            <div className='texto-hover'> 
            soy una crack con la pc
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
            <div className="icons">
                      <a href="../pages/error404.html">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="../pages/error404.html">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="../pages/error404.html">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
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
            soy un crack de la pc
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
            soy un crack de la pc
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
