import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormProducts from '../../components/adminProducts/FormProducts'
import { ProductsList } from '../../components/AdProducts/productsList'
// import { useAuth } from '../../context/AuthContext'

const productsListConst = JSON.parse(localStorage.getItem('prods')) || [];


export const ToDoProd = () => {
  // const auth = useAuth()

  const [productsList, setProductsList] = useState(productsListConst);
  // auth.login()
  function addNewProd(prod) {
    const updList =productsList.map(t => t)
    updList.push(prod);
    localStorage.setItem('prods', JSON.stringify(updList))
    setProductsList(updList)
    // setTaskList([...taskList, task])
  }
  
  function deleteProd(idx) {
    const arrayWithoutDeletedProd = productsList.filter(product => product.id !== idx);
    localStorage.setItem('prods', JSON.stringify(arrayWithoutDeletedProd))
    setProductsList(arrayWithoutDeletedProd)
  }
  
  function setProdDone(id) {
    const prodUpd = productsList.find(product => product.id === id);
    prodUpd.done = true;
    setProductsList([...productsList])
  }



  return (
    <div className="p-4">
      {/* {auth.user.name} */}
        <Container>
          <Row>
              {/* Columna de formulario  */}
            <Col xs={12} lg={6} className="bg-warning p-2 mb-2">
              <FormProducts addNewProd={addNewProd}    />
            </Col>
            <Col xs={12} lg={6} className="bg-info p-2">
              <productsList listProducts={productsList} deleteProdAppJs={deleteProd} setProdDone={setProdDone} />
            </Col>
          </Row>
        </Container>
      </div>
  )
}

