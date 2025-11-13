import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from "redux";
import { reducer } from "./store/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    counter: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
