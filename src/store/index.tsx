import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

const store: any = createStore (
    reducers, applyMiddleware(...middleware)

);

export default store;
