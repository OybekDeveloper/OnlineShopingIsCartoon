import React from 'react'

export default function Cart(props) {
    const {quantity=0,handleBasketShow=Function.prototype}=props;
    return (
        <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
            <i class="material-icons">add_shopping_cart</i>
            {quantity?<span className="cart-quantity">{quantity}</span>:null}
        </div>
    )
}
