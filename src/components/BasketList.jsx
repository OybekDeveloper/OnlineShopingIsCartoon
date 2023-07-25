import { useContext } from "react";
import BasketItem from "./BasketItem";
import { shopContext } from "./context";

export default function BasketList() {
    const { order , handleBasketShow} = useContext(shopContext);

    const totalPrice=order.reduce((sum,el)=>{
        return(sum+el.price*el.quantity);
    },0)
    return (
        <div className="bsk">
            <ul className="collection basket-list">
                <li className="collection-item active">Basket</li>
                {order.length ? (
                    order.map((item) => {
                        return <BasketItem key={item.id}{...item}/>;
                    })
                ) : (
                    <li className="collection-item">Basket is empty</li> // Fixed the closing tag here
                )}
                <li className="collection-item active">Total Price:{totalPrice}<b>$</b></li>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            </ul>
        </div>
    );
}
