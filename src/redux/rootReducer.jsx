import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import movie from './slice/movie'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
}
const reducers = combineReducers({
  movie,
})
const rootReducer = persistReducer(persistConfig, reducers)

export default rootReducer
