import { createSlice } from '@reduxjs/toolkit';


// State signature:
//
// types: array of strings, each string represents an available pizza type.
// sizes: array of numbers, each number represents an available pizza size.
// categories: array of strings, each string represents a pizza category.
// items: array of pizza objects.
//   Pizza object signature: {
//     id: integer >= 0 - product identificator.
//     imageUrl: string or undefined - path to the product image.
//     pizzaLabel: string - product name.
//     availableTypes: non empty array of integers >= 0 - contain indexes of
//       types state, each index represents the available type
//       for a specific product.
//     availableSizes: non empty array of integers >= 0 - contain indexes of
//       sizes state, each index represents the available size
//       for a specific product.
//     prices: array of arrays of numbers - the matrix of prices for
//       any product configuration (price = prices[type][size]).
//     categories: non empty array of integers >= 0 - contain indexes of
//       categories state, each index represents one of the categories
//       for a specific product.
//     rating: number.
//   }
// shownItems: array of integers >= 0 - list of products identificators.
//   Only pizzas whose id's are stored in the shownItems state
//   will be rendered in the gallery.
// sortOptions: array of strings, each string represents
//   an available sort option for products.
// isLoaded: boolean - logical flag indicating whether data has been loaded 
//   from the server or not.
// isSorted: boolean - logical flag indicating whether data has been already 
//   sorted or not.

const initialState = {
  types: [],
  sizes: [],
  categories: ['all'],
  items: [],
  shownItems: [],
  sortOptions: ['popularity', 'price', 'alphabet'],
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
} = pizzasSlice.actions;

export default pizzasSlice.reducer;