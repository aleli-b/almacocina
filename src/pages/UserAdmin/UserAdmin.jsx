import React from 'react';
import { Container } from 'react-bootstrap';
// import FormProducts from '../../components/adminProducts/FormProducts';
import { UsersList } from '../../components/UsersList/UsersList';
import '../../styles/Admin.css';

export const UserAdmin = () => {

  return (
    <>
      <Container fluid>
        <UsersList />
      </Container>
    </>
  )
}

