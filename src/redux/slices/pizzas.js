import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    types: [],
    sizes: [],
    categories: ["all"],
    items: []
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
    setTypes(state, action) {
      state.types = action.payload
    },
    setSizes(state, action) {
        state.sizes = action.payload
    },
    setCategories(state, action) {
        state.categories = action.payload
    }
  }
})

export const { setItems, setTypes, setSizes, setCategories } = pizzasSlice.actions

export default pizzasSlice.reducer