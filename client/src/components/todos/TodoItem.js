import React from 'react'
import {connect} from 'react-redux'
import {todoCompleteRequest, todoDeleteRequest, todoImportantRequest} from '../../redux/actions/todoAction'

const TodoItem = ({
                    data,
                    idx,
                    todoDeleteRequest,
                    todoCompleteRequest,
                    todoImportantRequest,
                    userId
                  }) => {
  const classes = ['row flex todos-item']
  if (!!data.completed) {
    classes.push('todos-completed')
  }
  if (!!data.important) {
    classes.push('todos-important')
  }
  return (
    <div className="todos">
      <div className={classes.join(' ')}>
        <div className="todos-num col">
          {idx}
        </div>
        <div className="todos-text col">
          {data.text}
        </div>
        <div className="todos-buttons col">
          <i
            className="material-icons blue-text"
            onClick={() => todoCompleteRequest({id: data._id, userId})}
          >check</i>
          <i
            className="material-icons orange-text"
             onClick={() => todoImportantRequest({id: data._id, userId})}
          >warning</i>
          <i
            className="material-icons red-text"
            onClick={() => todoDeleteRequest({id: data._id, userId})}
          >delete</i>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.id
})

export default connect(mapStateToProps, {
  todoDeleteRequest,
  todoCompleteRequest,
  todoImportantRequest
})(TodoItem)

