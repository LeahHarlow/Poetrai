// import { createStore, combineReducers, applyMiddleware } from 'redux';
// //import { combineReducers, applyMiddleware } from 'redux';
// //import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import poemsReducer from './poems';

// //I know that this is overkill for the current size of the app but I'm putting it here for later scalability.
// const reducer = combineReducers({ promptAndPoem: poemsReducer });

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );
// const store = createStore(reducer, middleware);

// export default store;



import { configureStore } from '@reduxjs/toolkit'
import poemsReducer from './poems';

//I know that this is overkill for the current size of the app but I'm putting it here for later scalability.

const store = configureStore({reducer: {
  promptAndPoem: poemsReducer}
});

export default store;
