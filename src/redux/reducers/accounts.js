import { accounts as C } from '../constants'

export const account = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_ACCOUNT:
      return {
        id: action.id,
        login: action.login,
        password: action.password,
        email: action.email
      }

    default:
      return state
  }
}

export const accounts = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ACCOUNT:
      return [...state, account({}, action)]
    case C.REMOVE_USER:
      return state.filter((item) => item.id !== action.id)
    default:
      return state
  }
}
