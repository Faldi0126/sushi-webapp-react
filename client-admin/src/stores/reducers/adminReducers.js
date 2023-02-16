import { ADMIN_ADD_ADMIN } from "../actionType";
import { ADMIN_LOGIN } from "../actionType";

//? Initial State
const initialState = {
  admin: {},
  loginData: {}
}

//? Reducer
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ADD_ADMIN:
      return {
        admin: action.payload
      }
    default:
      return state
  }
}


export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        loginData: action.payload
      }
    default:
      return state
  }
}


