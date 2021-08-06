import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducers/main_reducers/root_reducer';

const middlewares: any = [thunk];

// Only show in development in future
// if (process.env.NODE_ENV !== 'production') {
	middlewares.push(logger);
// }

const store: any = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {store, persistor};