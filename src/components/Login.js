import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import { useForm } from 'react-hook-form';
function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const userService = useContext(UserContext);

  const onHandleSubmit = (data) => {
    console.log(data);
    userService.login(data.email);
  };

  return (
    <div>
      {userService.userName ? <div>Użytkownik zalogowany jako: {userService.userName}</div> :
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <input name="email" ref={register({required: 'Uzupenij adres email'})} type="text"/>
          <button type="submit">LOGUJ</button>
        </form>}
      {errors.email && <div>{errors.email.message}</div>}

    </div>
  )
}

export default Login;