import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    types: [],
    sizes: [],
    categories: ["all"],
    items: [],
    shownItems: [],
    sortOptions: ["popularity", "price", "alphabet"],
    isLoaded: false,
    isSorted: false
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {

    setItems(state, action) {
      state.items = action.payload
    },
    setShownItems(state, action) {
      state.shownItems = action.payload
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
    
    itemsLoaded(state) {
      state.isLoaded = true
    },
    itemsSorted(state) {
      state.isSorted = true
    },
    itemsNotSorted(state) {
      state.isSorted = false
    },

    sortBy(state, action) {
      state.shownItems.sort((firstId, secondId) => {
        const a = state.items.find(item => item.id === firstId);
        const b = state.items.find(item => item.id === secondId);
        switch (action.payload) {
          case 'popularity':
            return b.rating - a.rating;
          case 'price':
            return (
              a.prices[a.availableTypes[0]][a.availableSizes[0]] - 
              b.prices[b.availableTypes[0]][b.availableSizes[0]]
            );
          case 'alphabet':
            return a.pizzaLabel.localeCompare(b.pizzaLabel);
          default:
            return 0;
        }
      });
      state.isSorted = true
    }
  }
})

export const { 
  setItems, 
  setShownItems, 
  setTypes, 
  setSizes, 
  setCategories, 
  sortBy, 
  itemsLoaded,
  itemsSorted,
  itemsNotSorted
} = pizzasSlice.actions

export default pizzasSlice.reducer