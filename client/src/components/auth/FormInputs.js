import React from 'react'

const FormInputs = ({form, changeHandler}) => {
  return(
    <form>
      <div className="input-field">
        <input
          id="email"
          type="email"
          name="email"
          className={'yellow-input validate'}
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
          className={'yellow-input validate'}
          onChange={changeHandler}
          value={form.password}
        />
        <label htmlFor="password">Пароль</label>
      </div>
    </form>
  )
}

export default FormInputs
