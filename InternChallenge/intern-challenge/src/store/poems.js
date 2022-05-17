const SET_POEMS = 'SET_POEMS';
const ADD_POEM = 'ADD_POEM';
const DELETE_POEM = 'DELETE_POEM'; //future state

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

export const _deletePoem = (poem) => {
  return {
    type: DELETE_POEM,
    poem,
  };
};

export const fetchPoems = (poems) => {
  return(dispatch) => {
    dispatch(setPoems(poems));
  };
};

export const addPoem = (poem) => {
  return (dispatch) => {
    dispatch(_addPoem(poem));
  }
};

// export const deletePoem = (id, history) => {
//   return async (dispatch) => {
//     // const token = window.localStorage.getItem(TOKEN);
//     // const { data: poem } = await axios.delete(`/api/POEMs/${id}`, {
//     //   headers: {
//     //     authorization: token,
//     //   },
//     // });
//     // dispatch(_deletePpem(poem));
//     //history.push('/poems');
//   };
// };

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
