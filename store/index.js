import {createStore} from 'redux';
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {
 products: [],
 productsDistribution: [],
 totalPrice: 0.00,
 currentCategory: null,
 addresses: [
     {
     id: '_' + Math.random().toString(36).substr(2, 9),
     title: "Home",
     address: "27 Street, 2569 Heritage Road Visalia, CA 93291"
    },
    {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: "Office",
        address: "33 Baker Street, Crescent Road, CA 65746 "
       }
  ],
  contacts: [
    {
    id: '_' + Math.random().toString(36).substr(2, 9),
    title: 'Primary',
    num: '202-555-0191'
    },
    {
     id: '_' + Math.random().toString(36).substr(2, 9),
     title: 'Secondary',
     num: '202-555-0701'
    }
]
}


export const initializeStore = (state = initialState)=> {
    return createStore(
        reducer,
        state,
        composeWithDevTools()
    )
}