import { users as C } from '../constants'

export const addUser = (payload) => {
  return {
    type: C.ADD_USER,
    ...payload
  }
}

export const removeUser = (id) => {
  return {
    type: C.REMOVE_USER,
    id
  }
}
