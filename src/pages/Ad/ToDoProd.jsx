import React from 'react';
import { Container } from 'react-bootstrap';
// import FormProducts from '../../components/adminProducts/FormProducts';
import { ProductList } from '../../components/AdProducts/productsList';
import { AdminHeader } from '../../components/AdminHeader/AdminHeader';
import '../../styles/Admin.css'

export const ToDoProd = () => {

  return (
    <>
      <Container fluid>
        <AdminHeader></AdminHeader>
        <ProductList />
      </Container>
    </>
  )
}

