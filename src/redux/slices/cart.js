import { createSlice } from '@reduxjs/toolkit';


// State signature:
//
// entries: array of objects.
//   Entry object signature: {
//     id: integer > 0 - product identificator.
//     imageUrl: string or undefined - path to the product image.
//     label: string - product name.
//     type: integer > 0 - index of types array (pizzas Redux slice).
//     size: integer > 0 - index of sizes array store (pizzas Redux slice).
//     price: number > 0 - product price for selected configuration.
//     count: integer > 0 - number of products the with same configuration
//       in the cart.
//   }
// entriesCount: integer >= 0 - total count the of shopping cart entries.
// entriesPrice: number > 0 - total price of the shopping cart entries.

const initialState = {
  entries: [],
  entriesCount: 0,
  entriesPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {


    // Action for add a new entry into the entries state.
    // Action payload must contain the entry object (see signature upper).
    // The count property of the entry object will always be 1.
    // It is optional to specify it in the object.

    addEntry(state, action) {
      let enrtyInState = false;

      for (const entry of state.entries) {
        if (
          (entry.id === action.payload.id) && 
          (entry.type === action.payload.type) && 
          (entry.size === action.payload.size)
        ) {
          entry.count += 1;
          enrtyInState = true;
        }
      }

      if (!enrtyInState) {
        state.entries.push({
          ...action.payload,
          count: 1
        })
      }

      state.entriesCount += 1;
      state.entriesPrice += action.payload.price;
    },


    // Action for remove the entry from the entries state.
    // Action payload must contain the entry object (see signature upper).
    // The entry object must contain the id, type, size and price properties.
    // Other properties are optional.
    //
    // If there are several identical items with the given configuration
    // in the entries state, then the action will only
    // decrease the count property of such an entry by 1.

    removeEntry(state, action) {
      const entryIndex = state.entries.findIndex((entry) => {
        if (
          (entry.id === action.payload.id) && 
          (entry.type === action.payload.type) && 
          (entry.size === action.payload.size)
        ) {
          return true;
        } else {
          return false;
        }
      });

      if (entryIndex !== -1) {
        if (state.entries[entryIndex].count === 1) {
          state.entries.splice(entryIndex, 1);
        } else {
          state.entries[entryIndex].count -= 1;
        }
        state.entriesCount -= 1;
        state.entriesPrice -= action.payload.price;
      }
    },


    // Action for remove all of entries with given configuration
    // from the entries state.
    // Action payload must contain the entry object (see signature upper).
    // The entry object must contain the id, type, size and price properties.
    // Other properties are optional.

    removeAllEntries(state, action) {
      const entryIndex = state.entries.findIndex((entry) => {
        if (
          (entry.id === action.payload.id) && 
          (entry.type === action.payload.type) && 
          (entry.size === action.payload.size)
        ) {
          return true;
        } else {
          return false;
        }
      });
      
      if (entryIndex !== -1) {
        const entryCount = state.entries[entryIndex].count;
        const entryPrice = state.entries[entryIndex].price;
        
        state.entries.splice(entryIndex, 1);
        
        state.entriesCount -= entryCount;
        state.entriesPrice -= (entryCount * entryPrice);
      }
    },

    clearCart(state) {
      state.entries = [];
      state.entriesCount = 0;
      state.entriesPrice = 0;
    }
  }
})
  
export const {
  addEntry,
  removeEntry,
  removeAllEntries,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;