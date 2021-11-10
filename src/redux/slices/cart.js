import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: {},
  entriesCount: 0,
  entriesPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addEntry(state, action) {
      const itemId = action.payload.id;
      const item = {
        type: action.payload.type,
        size: action.payload.size,
        price: action.payload.price
      };
      if (state.entries.hasOwnProperty(itemId)) {
        state.entries[itemId].push(item);
      } else {
        state.entries[itemId] = [item]
      }

      state.entriesCount += 1;
      state.entriesPrice += item.price;
    },

    removeEntry(state, action) {
      const itemId = action.payload.id;
      const itemString = JSON.stringify({
        type: action.payload.type,
        size: action.payload.size,
        price: action.payload.price
      });
      if (state.entries.hasOwnProperty(itemId)) {
        const itemIndex = state.entries[itemId].findIndex((a) => {
          return JSON.stringify(a) === itemString;
        });
        if (itemIndex !== -1) {
          state.entries[itemId].splice(itemIndex, 1);
          state.entriesCount -= 1;
          state.entriesPrice -= action.payload.price;
        };
      };
    },

    clearCart(state) {
      state.entries = {};
      state.entriesCount = 0;
      state.entriesPrice = 0;
    }
  }
})
  
export const {addEntry, removeEntry, clearCart} = cartSlice.actions
  
export default cartSlice.reducer