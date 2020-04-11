import { AddProduct } from './product.action'
import {iproducts} from './data'

export let initialState = iproducts;

export function reducer(state=initialState, action: AddProduct) {
    switch (action.type) {
        case 'AddProduct': 
            return [...state, action.payload]
        
        default: 
            return state
    }
}