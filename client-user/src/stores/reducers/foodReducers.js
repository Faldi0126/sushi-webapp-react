import { FOOD_SET_FOODS } from "../actionType"

//? Initial State
const initialState = {
  foods: [],
}


//? Reducer
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_SET_FOODS:
      return {
        foods: action.payload,
      }
    default:
      return state
  }
}

export default foodReducer
