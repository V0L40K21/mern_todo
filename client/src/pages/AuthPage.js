import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

import {loginRequest, registerRequest} from '../redux/actions/userAction'
import Materialize from 'materialize-css'
import FormButtons from '../components/auth/FormButtons'
import FormInputs from '../components/auth/FormInputs'

const AuthPage = ({registerRequest, loginRequest, message, loading}) => {
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
  useEffect(() => {
    if (!!message) {
      Materialize.toast({html: `${message}`});
    }
  }, [message])
  return (
    <div className={'row'}>
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <FormInputs
              form={form}
              changeHandler={changeHandler}
            />
          </div>
          <FormButtons
            loading={loading}
            authHandler={authHandler}
            registerHandler={registerHandler}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  message: state.user.message,
  loading: state.user.loading,
})

export default connect(mapStateToProps, {registerRequest, loginRequest})(AuthPage)
