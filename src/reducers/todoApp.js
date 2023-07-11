import { actions } from '../constant/actions'
import { listTODO } from '../constant/constant'

const initialState = listTODO

export const todoApp = (state = initialState, action) => {
  const { type, payload } = action
  const {
    TODO_DESTROY_ACTION,
    TODO_TOGGLE_STATUS_ACTION,
    TODO_REMOVE_COMPLETE_ACTION,
    TODO_CREATE_ACTION,
    TODO_EDIT_ACTION
  } = actions

  switch (type) {
    case TODO_DESTROY_ACTION:
      return state.filter(todo => todo.id !== payload.id)

    case TODO_TOGGLE_STATUS_ACTION:
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo.status = payload.status
        }
        return todo
      })

    case TODO_REMOVE_COMPLETE_ACTION:
      return state.filter(todo => !todo.status)

    case TODO_CREATE_ACTION:
      return [...state, payload]

    case TODO_EDIT_ACTION:
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo = payload
        }
        return todo
      })

    default:
      return state
  }
}
