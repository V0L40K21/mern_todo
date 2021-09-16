import React, {useState} from 'react'
import {connect} from 'react-redux'

import {loginRequest, registerRequest} from '../redux/actions/userAction'

const AuthPage = ({registerRequest, loginRequest}) => {
  const [form, setForm,] = useState({email: '', password: ''});
  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const registerHandler = () => {
    registerRequest({...form})
  }
  const authHandler = () => {
    loginRequest({...form})
  }
  return (
    <div className={'row'}>
      <div className="col s6 offset-s3">
        <h1>ToDo app</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <form>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={'yellow-input'}
                  onChange={changeHandler}
                  value={form.email}
                />
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={'yellow-input'}
                  onChange={changeHandler}
                  value={form.password}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </form>
          </div>
          <div className="card-action">
            <button className={'btn yellow darken-4'} onClick={authHandler} style={{marginRight: 10}}>Войти</button>
            <button className={'btn grey lighten-1 black-text'} onClick={registerHandler}>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {registerRequest, loginRequest})(AuthPage)
