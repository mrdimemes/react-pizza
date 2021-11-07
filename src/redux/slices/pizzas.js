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
    },

    sortBy(state, action) {
      state.items.sort((a, b) => {
        switch (action.payload) {
          case 'popularity':
            return a.rating - b.rating;
          case 'price':
            return (
              a.price[a.availableTypes[0]][a.availableSizes[0]] - 
              b.price[b.availableTypes[0]][b.availableSizes[0]]
            );
          case 'alphabet':
            return a.pizzaLabel.localeCompare(b.pizzaLabel);
          default:
            return 0;
        }
      })
    }
  }
})

export const { setItems, setTypes, setSizes, setCategories, sortBy } = pizzasSlice.actions

export default pizzasSlice.reducer