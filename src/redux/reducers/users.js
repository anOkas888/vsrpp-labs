import { users as C } from '../constants'

export const user = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_USER:
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }

    default:
      return state
  }
}

export const users = (state = [], action) => {
  switch (action.type) {
    case C.ADD_USER:
      action.id = state.length + 1
      return [...state, user({}, action)]
    case C.REMOVE_USER:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
