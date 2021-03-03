import {createStore} from 'redux';
import reducer from './reducers/productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
 products: [],
 totalPrice: 0.00,
 currentCategory: null
}

export const initializeStore = (state = initialState)=> {
    return createStore(
        reducer,
        state,
        composeWithDevTools()
    )
}