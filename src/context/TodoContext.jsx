import { createContext } from 'react'
import PropTypes from 'prop-types'
import { useTodoHook } from '../hooks/useTodoHook'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const {
    listTodo,
    todoViewEdit,
    numTodo,
    filter,

    destroyTodo,
    functionToggleStatus,
    handleFilter,
    handleRemoveComplete,
    createTodo,
    clickEdit,
    funEditTodo
  } = useTodoHook()

  return <TodoContext.Provider value={{
    listTodo,
    todoViewEdit,
    numTodo,
    filter,

    destroyTodo,
    functionToggleStatus,
    handleFilter,
    handleRemoveComplete,
    createTodo,
    clickEdit,
    funEditTodo
  }} >
    {children}
  </TodoContext.Provider>
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
}
