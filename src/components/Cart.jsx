import React, { useContext } from 'react'
import { shopContext } from './context';

export default function Cart() {
    const {order,handleBasketShow=Function.prototype}=useContext(shopContext);
    const quantity=order.length;
    return (
        <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
            <i class="material-icons">add_shopping_cart</i>
            {quantity?<span className="cart-quantity">{quantity}</span>:null}
        </div>
    )
}
