import { useState, useReducer, useMemo } from 'react'
import { FILTERS, listTODO } from '../constant/constant'
import { todoApp } from '../reducers/todoApp'
import { actions } from '../constant/actions'

export const useTodoHook = () => {
  const {
    TODO_DESTROY_ACTION,
    TODO_TOGGLE_STATUS_ACTION,
    TODO_REMOVE_COMPLETE_ACTION,
    TODO_CREATE_ACTION,
    TODO_EDIT_ACTION
  } = actions

  const [stateListTodo, dispatch] = useReducer(todoApp, listTODO)
  const [filter, setFilter] = useState(FILTERS.all)
  const [todoViewEdit, setTodoViewEdit] = useState(null)

  const destroyTodo = (id) => {
    dispatch({ type: TODO_DESTROY_ACTION, payload: { id } })
  }

  const functionToggleStatus = ({ id, status }) => {
    dispatch({ type: TODO_TOGGLE_STATUS_ACTION, payload: { id, status } })
  }

  const handleFilter = (typeFilter) => {
    setFilter(typeFilter)
  }

  const handleRemoveComplete = () => {
    dispatch({ type: TODO_REMOVE_COMPLETE_ACTION })
  }

  const createTodo = (newTitleTodo) => {
    if (!newTitleTodo) {
      return
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: newTitleTodo,
      status: false
    }

    dispatch({ type: TODO_CREATE_ACTION, payload: newTodo })
  }

  const clickEdit = (id) => {
    setTodoViewEdit(id)
  }

  const funEditTodo = (newTodo) => {
    dispatch({ type: TODO_EDIT_ACTION, payload: newTodo })
    setTodoViewEdit(null)
  }

  const listTodo = useMemo(() => {
    return stateListTodo.filter(todo => {
      if (filter === FILTERS.active) {
        return !todo.status
      }

      if (filter === FILTERS.completed) {
        return todo.status
      }

      return todo
    })
  }, [stateListTodo, filter])

  const numTodo = listTodo.length

  return {
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
  }
}
