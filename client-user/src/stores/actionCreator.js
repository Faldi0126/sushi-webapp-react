import { FOOD_SET_FOODS } from "./actionType";
import { FOOD_GET_DETAIL } from "./actionType";
// const origin2 = 'http://localhost:3000'
const origin = "https://yoo-sushi.foxhub.space"

export const setFoods = (payload) => {
  return {
    type: FOOD_SET_FOODS,
    payload,
  }
}

export const getDetail = (payload) => {
  return {
    type: FOOD_GET_DETAIL,
    payload,
  }
}

export const fetchFoodsAction = () => {
  return async (dispatcher, getState) => {
    try {
      const res = await fetch(origin + `/users/items`);
      const data = await res.json();

      dispatcher(setFoods(data));

      return data;
    } catch (error) {
      throw error;
    }
  }
};

export const fetchDetailAction = (id) => {
  return async (dispatcher, getState) => {
    try {
      const res = await fetch(origin + `/users/items/${id}`);
      const data = await res.json();

      dispatcher(getDetail(data));

      return data;
    } catch (error) {
      throw error;
    }
  }
}