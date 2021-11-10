import { configureStore } from '@reduxjs/toolkit'

import pizzasReducer from './slices/pizzas'
import cartReducer from './slices/cart'

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer
  }
})

export default store