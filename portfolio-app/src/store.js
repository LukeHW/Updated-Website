import { applyMiddleware, compose, createStore } from 'redux'

export function configureStore(preloadedState) {
  const store = createStore()
  return store
}