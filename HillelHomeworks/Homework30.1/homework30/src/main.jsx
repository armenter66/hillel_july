import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './store/swapiSlice';

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});


createRoot(document.getElementById('root')).render( 
    <Provider store={store}>
        <App />
    </Provider>
);
