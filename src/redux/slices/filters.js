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
// activeSortOption: integer >= 0. Index of sortOptions state.
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
  activeSortOption: 0,
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

    setActiveSortOption(state, action) {
      state.activeSortOption = action.payload;
      state.isShownProductsSorted = false;
    },

    sortShownProducts(state) {
      state.shownProducts.sort((firstId, secondId) => {
        const firstProduct = state.products.find(product => {
          return product.id === firstId;
        });
        const secondProduct = state.products.find(product => {
          return product.id === secondId;
        });

        switch ( state.sortOptions[state.activeSortOption] ) {
          case 'popularity':
            return secondProduct.rating - firstProduct.rating;
          case 'price':
            return (
              firstProduct.prices[firstProduct.availableTypes[0]][firstProduct.availableSizes[0]] -
              secondProduct.prices[secondProduct.availableTypes[0]][secondProduct.availableSizes[0]]
            );
          case 'alphabet':
            return firstProduct.pizzaLabel.localeCompare(
              secondProduct.pizzaLabel
            );
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

  setActiveSortOption,
  sortShownProducts,
} = filtersSlice.actions;

export default filtersSlice.reducer;