import { rest } from '../constants'

const { INVERSE_STATUS } = rest

export const changeAllowed = () => {
  return {
    type: INVERSE_STATUS
  }
}
