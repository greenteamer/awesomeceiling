import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '@appReducers';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware, ];

// export const store = compose(
//   applyMiddleware(...middleware)
// )(createStore)(reducers);


const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export const store = createStoreWithMiddleware(reducers);
