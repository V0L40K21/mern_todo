import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {todoAllRequest} from '../../redux/actions/todoAction'
import TodoItem from './TodoItem'

const TodoList = ({todos, loading, todoAllRequest, userId}) => {
  useEffect(() => {
    todoAllRequest({userId})
  }, [todoAllRequest, userId])
  return (
    <div>
      {todos.length ? todos.map((todo, index) => {
          return (
            <div key={todo?._id}>
              <TodoItem data={todo} idx={index + 1}/>
            </div>
          )
        }) :
        <div/>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.todos.loading,
  todos: state.todos.todos,
  userId: state.user.id
})

export default connect(mapStateToProps, {todoAllRequest})(TodoList)

