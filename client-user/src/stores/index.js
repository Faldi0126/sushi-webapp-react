import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux'
import foodReducer from './reducers/foodReducers'
import foodDetailReducer from './reducers/foodDetailReducers'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  foods: foodReducer,
  foodDetail: foodDetailReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store