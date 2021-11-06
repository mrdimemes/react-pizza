import { createStore } from 'redux';

const defaultState = {};

function mainReducer(state = defaultState, action) {
    return state;
  }

const store = createStore(mainReducer);

export default store;
