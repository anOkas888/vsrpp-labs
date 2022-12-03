import { accounts as C } from '../constants'

export const addAccount = (payload) => {
  return {
    type: C.ADD_ACCOUNT,
    ...payload
  }
}

export const removeAccount = (id) => {
  return {
    type: C.REMOVE_ACCOUNT,
    id
  }
}
