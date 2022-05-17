const SET_POEMS = 'SET_POEMS';
const ADD_POEM = 'ADD_POEM';
const DELETE_POEM = 'DELETE_POEM'; //future state

//const TOKEN = 'token';

export const setPoems = (poems) => {
  return {
    type: SET_POEMS,
    poems,
  };
};

export const _addPoem = (poem) => {
  return {
    type: ADD_POEM,
    poem,
  };
};

export const _deletePoem = (POEM) => {
  return {
    type: DELETE_POEM,
    POEM,
  };
};

export const fetchPoems = () => {
  return async (dispatch) => {
    try {
      //where does it come from?
    } catch (err) {
      console.error('I have zero poems here');
      console.log(err);
    }
  };
};

export const addPoem = (poem) => {
  return async (dispatch) => {
    try {
      //how it work?
    } catch (error) {
      console.error('theres something wrong with your add POEM thunk');
      console.log(error);
    }
  };
};

export const deletePoem = (id, history) => {
  return async (dispatch) => {
    // const token = window.localStorage.getItem(TOKEN);
    // const { data: POEM } = await axios.delete(`/api/POEMs/${id}`, {
    //   headers: {
    //     authorization: token,
    //   },
    // });
    // dispatch(_deletePOEM(POEM));
    //history.push('/poems');
  };
};

const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POEMS:
      return action.poems;
    case ADD_POEM:
      return [...state, action.poem];
    case DELETE_POEM:
      return state.filter((poem) => poem.id !== action.poem.id);
    default:
      return state;
  }
};
