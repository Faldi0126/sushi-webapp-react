import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux'
import { foodReducer } from './reducers/foodReducers'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  foods: foodReducer,
  categories: foodReducer,
  food: foodReducer,
  category: foodReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store