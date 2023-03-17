import React from 'react';
import { Container } from 'react-bootstrap';
// import FormProducts from '../../components/adminProducts/FormProducts';
import { ProductList } from '../../components/AdminList/productsList';
import { AdminHeader } from '../../components/AdminHeader/AdminHeader';
import '../../styles/Admin.css'
import axios from 'axios';

export const ToDoProd = () => {
  const sendProduct = async (data) => {
    try {
        const loginData = await axios.post('http://localhost:3001/products', data);
        console.log(loginData);
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <Container fluid>
        <AdminHeader sendProduct={sendProduct}></AdminHeader>
        <ProductList />
      </Container>
    </>
  )
}

