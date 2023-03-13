import React from "react";
import { Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";


const FormProducts = (props) => {

  function cargarProd(e) {
    e.preventDefault();
    //VER QUE ES EL TASKDETAIL
    console.log(e.target.elements.prodDetail);


    const newProd = {
      id: Date.now(),
      detail: e.target.elements.prodDetail.value,
      done: false
    }

    props.addNewProd(newProd)
  }

  return (
    <div>

    <Form onSubmit={cargarProd} striped bordered hover>
    <Form.Group className="mb-3 " controlId="prodDetail">
    <Table variant="dark">
      <thead>
        <tr>
          <th>Nombre Producto</th>
          <th>Descripcion</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pizza</td>
          <td>masa queso</td>
          <td>1250</td>
        </tr>
        <tr>
          <td>pizza jamon</td>
          <td>masa queso jamon</td>
          <td>1500</td>
        </tr>
      </tbody>
    </Table>
      </Form.Group>
    </Form>
    </div>
  );
}

export default FormProducts;






//     <div>
//             <Form onSubmit={cargarTarea}>
//               <Form.Group className="mb-3" controlId="taskDetail">
//                 <Form.Label>Ingrese tarea a realizar</Form.Label>
//                 <Form.Control type="text" placeholder="Detalle de la tarea" />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Agregar
//               </Button>
//             </Form>
//     </div>
//   );
// };

// export default FormTareas;
