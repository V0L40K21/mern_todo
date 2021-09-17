import React, {useState} from 'react'
import {connect} from 'react-redux'
import {todoAddRequest} from '../../redux/actions/todoAction'

const TodoForm = ({loading, userId, todoAddRequest}) => {
  const [text, setText] = useState('')
  const todoAddHandler = () => {
    todoAddRequest({text, userId})
    setText('')
  }
  return(
    <form className="form col s12" onSubmit={e => e.preventDefault()}>
      <div className="row">
        <div className="input-field col s9">
          <input
            id={'todo'}
            name={'todo'}
            type={'text'}
            className={'gray-input'}
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <label htmlFor={'todo'}>Описание задачи</label>
        </div>
        <div className="input-field col s3">
          <button
            className={'btn yellow darken-4'}
            onClick={todoAddHandler}
            style={{marginRight: 10}}
            disabled={!!loading}>
            Запланировать
          </button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => ({
  loading: state.todos.loading,
  userId: state.user.id,
})

export default connect(mapStateToProps, {todoAddRequest})(TodoForm)
