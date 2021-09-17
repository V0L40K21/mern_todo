import React from 'react'

const FormButtons = ({loading, authHandler, registerHandler}) => {
  return (
    <div className="card-action">
      <button
        className={'btn yellow darken-4'}
        onClick={authHandler}
        style={{marginRight: 10}}
        disabled={loading}>
        Войти
      </button>
      <button
        className={'btn grey lighten-1 black-text'}
        onClick={registerHandler}
        disabled={loading}>
        Регистрация
      </button>
    </div>
  )
}

export default FormButtons
