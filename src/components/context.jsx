import {createContext, useReducer} from "react";
import {reducer} from './reducer'
export const shopContext=createContext();

const initialState={
    goods:[],
    loader:true,
    order:[],
    isBasketShow:false
}
export const ContextProvider=({children})=>{
    const [value , dispatch]=useReducer(reducer , initialState);
    value.addBasket=(item)=>{
        dispatch({type:'ADD_TO_BASKET', payload:item})
    }
    value.removeFromBasket=(itemID)=>{
        dispatch({type:'REMOVE_TO_BASKET',payload:{id:itemID}})
    }
    value.incrementQuantity=(itemID)=>{
        dispatch({type:'INCREMENT_QUANTITY',payload:{id:itemID}})
    }
    value.decrementQuantity=(itemID)=>{
        dispatch({type:'DECREMENT_QUANTITY',payload:{id:itemID}})
    }
    value.handleBasketShow=()=>{
        dispatch({type:'TOGGLE_BASKET'})
    }
    value.setGoods=(data)=>{
        dispatch({type:"SET_GOODS", payload: data})
    }
    return(
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}