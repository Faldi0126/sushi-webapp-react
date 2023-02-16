import { FOOD_GET_FOOD } from "./actionType";
import { ADMIN_LOGIN } from "./actionType";
import { FOOD_GET_CATEGORIES } from "./actionType";
import { FOOD_DETAIL_FOOD } from "./actionType";
import { FOOD_ADD_FOOD } from "./actionType";
import { FOOD_DELETE_FOOD } from "./actionType";
import Swal from "sweetalert2";



// const origin2 = 'http://localhost:3000'
const origin = "https://yoo-sushi.foxhub.space"



const getFoods = (payload) => {
  return {
    type: FOOD_GET_FOOD,
    payload,
  }
}

export const fetchFoodsAction = () => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/users/items`);
      const data = await res.json()

      dispatcher(getFoods(data))
    } catch (error) {
      throw error
    }
  }
}


export const addAdminAction = (payload) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/addAdmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(payload)
      });


      if (res.ok) {
        Swal.fire('Success Add Admin 🎉')
      } else if (!res.ok) {
        Swal.fire('Failed Add Admin!')
      }

    } catch (error) {
      throw error
    }
  }
}


const handleLogin = (payload) => {
  return {
    type: ADMIN_LOGIN,
    payload,
  }
}

export const loginAction = (payload) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json()

      if (res.ok) {
        Swal.fire('Success Login 🎉')
        localStorage.setItem('access_token', data.access_token)
        dispatcher(fetchFoodsAction())
      } else if (!res.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong email or password!',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}


const addFood = (payload) => {
  return {
    type: FOOD_ADD_FOOD,
    payload,
  }
}

export const addFoodAction = (payload) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/addItems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(payload)
      });


      if (res.ok) {
        Swal.fire('Success Add Food 🎉')
        const data = await res.json()
        dispatcher(fetchFoodsAction())
      } else if (!res.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add food!',
        })

      }

    } catch (error) {
      console.log(error)
    }
  }
}



const getCategories = (payload) => {
  return {
    type: FOOD_GET_CATEGORIES,
    payload
  }
}

export const getCategoriesAction = () => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + '/admins/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        }
      })
      const data = await res.json()


      dispatcher(getCategories(data))

    } catch (error) {
      throw error
    }
  }
}

const deleteFood = (payload) => {
  return {
    type: FOOD_DELETE_FOOD,
    payload
  }
}


export const deleteFoodAction = (id) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/items/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        }
      });

      if (res.ok) {
        Swal.fire('Success Deleting an item')
        dispatcher(fetchFoodsAction())
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete food!',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}


const getDetail = (payload) => ({
  type: FOOD_DETAIL_FOOD,
  payload
})

export const getDetailAction = (id) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/users/items/${id}`)
      const data = await res.json()

      dispatcher(getDetail(data))
    } catch (error) {
      throw error
    }
  }
}


export const editFoodAction = (payload, id) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/items/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        Swal.fire('Success Edit an item')
        dispatcher(fetchFoodsAction())
      } else if (!res.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to edit food!',
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export const addCategoryAction = (payload) => {
  return async (dispatcher) => {
    try {
      const res = await fetch(origin + `/admins/addCategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json()


      if (res.ok) {
        Swal.fire('Success Add Category')
        dispatcher(getCategoriesAction())
      } else if (!res.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add category!',
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
}
