const ADD_POEM = 'ADD_POEM';
const CLEAR_POEMS = 'CLEAR_POEMS'; //future state

export const _addPoem = (poemObject) => {
  return {
    type: ADD_POEM,
    poemObject,
  };
};

export const _clearPoems = (poems) => {
  return {
    type: CLEAR_POEMS,
    poems,
  };
};

export const addPoem = (poemObject) => {
  return (dispatch) => {
    dispatch(_addPoem(poemObject));
  };
};

export const clearPoems = (poems) => {
  return (dispatch) => {
    dispatch(_clearPoems(poems));
  };
};

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POEM:
      return [...state, action.poemObject];
    case CLEAR_POEMS:
      return (state = []);
    default:
      return state;
  }
};
