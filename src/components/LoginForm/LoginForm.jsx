import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import './styles.css'

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = useAuth();
  async function submit(data) {
    try {
      auth.login(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group mb-3">
          <label for="exampleInputEmail1" className='mb-2'>Correo electrónico</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo" {...register("email", { required: true, minLength: 3, maxLength: 24 })} /> {errors.email && <p>Error en el mail</p>}
            <small id="emailHelp" className="form-text text-muted">Jamás compartiremos tu email con nadie.</small>
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1" className='mb-2'>Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Introduce tu contraseña" {...register("password", { required: true, minLength: 3, maxLength: 24 })} /> {errors.password && <p>Error en la pass</p>}
          <small id="emailHelp" className="form-text text-muted">¿No tienes usuario? Regístrate <a href='/registro'>aquí</a></small>
        </div>
        <button type="submit" className="btn btn-outline-dark">Ingresar</button>
      </form>
    </div>
  )
}
