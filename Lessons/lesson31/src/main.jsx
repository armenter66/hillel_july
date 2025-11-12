import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import { userReducer } from './store/userReducer.js';
import { todosReducer } from './store/todosReducer.js';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer
});
const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = compose(middlewareEnhancer, composeWithDevTools());



const store = createStore(rootReducer, composedEnhancers)



createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>
);
