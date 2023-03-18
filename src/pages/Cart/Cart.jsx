import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/context/Cart';
import '../../styles/Cart.css';

const YourCart = () => {
  const { cart, addProduct, removeProduct, clearCart } = useCart();
  return (
    <div className='cart '>
      {cart.length > 0 &&
        <>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, i) => (
                <tr key={product._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>
                    <div className='d-flex align-items-center gap-3'>
                      <img className='cart-img img-thumbnail' src={product.url} alt="product thumbnail"></img>
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td>{product.qty}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className='d-flex gap-3'>
                      <Button onClick={() => addProduct(product)} variant='primary'>+</Button>
                      <Button onClick={() => removeProduct(product)} variant='danger'>-</Button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total:</td>
                <td colSpan={4} className="text-end">${cart.reduce((acc, item) => { return acc + item.price * item.qty }, 0)}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant='danger' className='m-3' onClick={() => clearCart()}>Limpiar carrito</Button>
        </>}
      {cart.length === 0 && <p className='text-center'>El carrito está vacío, por favor añade productos a través de la <Link className='link px-2 pb-1' to="/carta">carta</Link> y vuelve a intentarlo</p>}
    </div>
  )
}

export default YourCart