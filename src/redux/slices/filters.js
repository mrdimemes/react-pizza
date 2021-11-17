import { createSlice } from '@reduxjs/toolkit';


// State signature:
//
// products: array of pizza objects.
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
// isProductsLoaded: boolean - logical flag indicating whether
//   data has been loaded from the server or not.
// productTypes: array of strings, each string represents an available
//   product type.
// productSizes: array of numbers, each number represents an available
//   product size.
// productCategories: array of strings, each string represents
//   a product category.
// activeCategory: integer >= 0. Index of productCategories state.
// shownProducts: array of integers >= 0 - list of products identificators.
//   Only products whose id's are stored in the shownProducts state
//   will be rendered in the gallery.
// sortOptions: array of strings, each string represents
//   an available sort option for products.
// isShownProductsSorted: boolean - logical flag indicating whether
//   data has been already sorted or not.

const initialState = {
  products: [],
  isProductsLoaded: false,
  productTypes: [],
  productSizes: [],

  productCategories: ['all'],
  activeCategory: 0,
  shownProducts: [],

  sortOptions: ['popularity', 'price', 'alphabet'],
  isShownProductsSorted: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    setProducts(state, action) {
      state.products = action.payload;
    },

    productsLoaded(state) {
      state.isProductsLoaded = true;
    },

    setProductTypes(state, action) {
      state.productTypes = action.payload;
    },

    setProductSizes(state, action) {
      state.productSizes = action.payload;
    },

    setProductCategories(state, action) {
      state.productCategories = action.payload;
    },

    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },

    setShownProducts(state, action) {
      state.shownProducts = action.payload;
      state.isShownProductsSorted = false;
    },

    sortBy(state, action) {
      state.shownProducts.sort((firstId, secondId) => {
        const a = state.products.find(product => product.id === firstId);
        const b = state.products.find(product => product.id === secondId);
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
      state.isShownProductsSorted = true;
    }
  }
})

export const {
  setProducts,
  setProductTypes,
  setProductSizes,
  productsLoaded,

  setProductCategories,
  setActiveCategory,
  setShownProducts,

  sortBy
} = filtersSlice.actions;

export default filtersSlice.reducer;