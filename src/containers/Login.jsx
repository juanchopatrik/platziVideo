/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {

  const [form, setValues] = useState({ // form es el formularrio y setvalues guarda los valores
    //información inicial del estado
    email: '',
  });

  //maneja los cambios en los input
  const handleInput = (event) => {
    //creo el llamado para guardar la información
    setValues({
      ...form,
      //obtengo el nombre y asigno el value que esta en el input
      [event.target.name]: event.target.value,
    });
  };
  //cuando le damos enviar la presenta donde sea necesario
  const handleSubmit = (event) => {
    //hay que poner para anular la captura de html
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            //nos permite escuchar el input
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
                    Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div><img src={googleIcon} /> Inicia sesión con Google</div>
          <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
        </section>
        <p className='login__container--register'>
              No tienes ninguna cuenta {' '}
          <Link to='/register'>
                Regístrate
          </Link>
        </p>
      </section>
    </section>

  );
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
