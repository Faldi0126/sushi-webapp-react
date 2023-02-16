import { FOOD_GET_DETAIL } from '../actionType';

//? initial state
const initialState = {
  foodDetail: {},
};

//? reducer
const foodDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_GET_DETAIL:
      return {
        foodDetail: action.payload,
      };
    default:
      return state;
  }
};


export default foodDetailReducer;