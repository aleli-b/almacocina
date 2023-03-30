import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheck } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

export const GridRegister = () => {

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function AddNewUsers(evt) {
    try {

      evt.preventDefault();

      const el = evt.target.elements;

      if (el.password.value !== el.confirmPassword.value) {
        Swal.fire("Error", "Las contraseñas no coinciden", "warning");
        return
      }





      console.log(evt);
      const data = {
        name: el.name.value,
        lastName: el.lastName.value,
        email: el.email.value,
        password: el.password.value
      }
      // const { nameInput, surInput, emailInput, passwordInput, passwordRepeatInput} = data;
      const registerData = await axios.post(`http://localhost:3001/users`, data);
      console.log(registerData);
      Swal.fire({
        title: "Buen trabajo!",
        text: "El usuario ha sido registrado correctamente!",
        icon: "success",
      });
      //aqui hace un local storage con el json del registro

      evt.target.reset()
    } catch (error) {
      console.log(error)
      Swal.fire("Error!", "El usuario no se ha registrado!", "error");
    }

  }

  // async function AddNewUsers(e){

  //     console.log(`agregar usuario nuevo`, nameInput.current.value, surInput.current.value, emailInput.current.value, passwordInput.current.value, passwordRepeatInput.current.value)
  // }


  return (
    <Container fluid >
      <Row>
      <Col>
        <h1 className="titleRegister offset-2"> Registrate </h1>
      </Col>
      <Col>
        <h1 className="titleRegister offset-2"> A tener en cuenta </h1>
      </Col>
      </Row>
      <Row>
      <Col sm={6} className="formRegisto w-50 p-4">
        <Form  onSubmit={AddNewUsers} >
          <Row>
            <Col xs={12} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Ingrese su nombre" name='name' maxLength={20} minLength={3} required />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control value={lastname} onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Ingrese su apellido" name='lastName' maxLength={20} minLength={3} required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Direccion de correo electronico</Form.Label>
            <Form.Control value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Ingrese email" name='email' maxLength={30} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Ingrese contraseña" name='password' maxLength={10} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" placeholder="Confirme su contraseña" name='confirmPassword' maxLength={10} required />
          </Form.Group>

          <small id="emailHelp" className="form-text text-muted">¿Ya tienes usuario? Ingresa <a href='/login'>aquí</a></small>
          <br />

          <Button className="button-reg mt-3" variant="outline-dark" type="submit">
            Registrarme
          </Button>
        </Form>
        </Col>

        {/* </Col> */}
        <Col sm={6} className="itemsRegistro mt-5 pt-3">

          <Row className='rowItems'>

            <h4> <FaCheck style={{ color: 'brown', fontSize: '30px' }} />  Recibi los menus diarios a tu mail</h4>
          </Row>

          <Row className='rowItems'>

            <h4> <FaCheck style={{ color: 'brown', fontSize: '30px' }} /> Obtené descuentos especiales para suscriptores</h4>
          </Row>

          <Row className='rowItems'>

            <h4>  <FaCheck style={{ color: 'brown', fontSize: '30px' }} /> Envios gratis</h4>
          </Row>

          <Row className='rowItems'>

            <h4 > <FaCheck style={{ color: 'brown', fontSize: '30px' }} /> Envios prioritarios</h4>
          </Row>

        </Col>
      </Row>

    </Container>
  );
}