import { FOOD_GET_FOOD } from "../actionType";
import { FOOD_GET_CATEGORIES } from "../actionType";
import { FOOD_DETAIL_FOOD } from "../actionType";
import { ADMIN_ADD_ADMIN } from "../actionType";
import { ADMIN_LOGIN } from "../actionType";
import { FOOD_EDIT_FOOD } from "../actionType";
import { FOOD_ADD_CATEGORY } from "../actionType";

const initialState = {
  admin: {},
  admin: {},
  foods: [],
  categories: [],
  food: {},
  category: {},
};

//? Reducer
export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_GET_FOOD:
      return {
        ...state,
        foods: action.payload,
      }
    case FOOD_GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case FOOD_DETAIL_FOOD:
      return {
        ...state,
        food: action.payload
      }
    case ADMIN_ADD_ADMIN:
      return {
        ...state,
        admin: action.payload
      }
    case ADMIN_LOGIN:
      return {
        ...state,
        admin: action.payload
      }
    case FOOD_EDIT_FOOD:
      return {
        ...state,
        food: action.payload
      }
    case FOOD_DETAIL_FOOD:
      return {
        ...state,
        food: action.payload
      }
    case FOOD_ADD_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}
