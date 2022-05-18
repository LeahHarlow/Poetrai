const ADD_POEM = 'ADD_POEM';
const CLEAR_POEMS = 'CLEAR_POEMS';

export const _addPoem = (promptAndPoem) => {
  return {
    type: ADD_POEM,
    promptAndPoem,
  };
};

export const _clearPoems = (poems) => {
  return {
    type: CLEAR_POEMS,
    poems,
  };
};

export const addPoem = (promptAndPoem) => {
  return (dispatch) => {
    dispatch(_addPoem(promptAndPoem));
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
      return [...state, action.promptAndPoem];
    case CLEAR_POEMS:
      return (state = []);
    default:
      return state;
  }
};
