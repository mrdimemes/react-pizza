import { configureStore } from '@reduxjs/toolkit'

import pizzasReducer from './slices/pizzas'

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  }
})

export default store