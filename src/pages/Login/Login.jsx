import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import '../../styles/Login.css'

export const Login = () => {
  return (
    <div className='container login-container'>
      <LoginForm />
    </div>
  )
}
