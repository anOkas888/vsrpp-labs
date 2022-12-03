import { rest as C } from '../constants'

export const allowed = (state = false, action) =>
  action.type === C.INVERSE_STATUS ? !state : state

export const accountCounter = (state = 1, action) =>
  action.type === C.INCREMENT_ACCOUNT_COUNTER ? state + 1 : state

export const userCounter = (state = 1, action) =>
  action.type === C.INCREMENT_USER_COUNTER ? state + 1 : state
