import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
}
