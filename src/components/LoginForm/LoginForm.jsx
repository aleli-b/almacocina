import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';

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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("email", { required: true, minLength: 3, maxLength: 24 })} /> {errors.email && <p>Error en el mail</p>}
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" {...register("password", { required: true, minLength: 3, maxLength: 24 })} /> {errors.password && <p>Error en la pass</p>}
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
