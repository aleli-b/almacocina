import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Logo } from '../../components/Logo/Logo';
import { useCart } from '../../components/context/Cart';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { cart } = useCart()
  return (
    <div>
      <Navbar expand="lg" className='navbar fixed-top'>
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavItem className="mx-3">
              <Link to="/" className='nav-link links-nav rounded py-1 px-2'>Home</Link>
            </NavItem>
            <NavItem className='links-nav me-auto'>
              <Link className='nav-link d-flex gap-2 align-items-center links-nav rounded p-1' to='/your-cart'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <div className='rounded-pill px-2 bg-danger'>{cart.length}</div></Link>
            </NavItem>
            <NavItem className='mx-3'>
              <Nav.Link href="/registro" className='links-nav rounded p-1'>Registrarse</Nav.Link>
            </NavItem>
            <NavItem className='links-nav'>
              <Nav.Link href='/login' className='links-nav rounded py-1 px-2'>Login</Nav.Link>
            </NavItem>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
