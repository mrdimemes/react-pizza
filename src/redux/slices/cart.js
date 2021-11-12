import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: [],
  entriesCount: 0,
  entriesPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

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
  
export const {addEntry, removeEntry, removeAllEntries, clearCart} = cartSlice.actions
  
export default cartSlice.reducer