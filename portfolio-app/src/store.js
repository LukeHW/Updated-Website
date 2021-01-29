import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(preloadedState) {
  const store = createStore();
  return store;
}
