import React, { useState, useEffect } from 'react';
import '../App.css';
import Loader from './Loader';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodList';
import Cart from './Cart';
import BasketList from "./BacketList";
import {toast} from "react-toastify";

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [loader, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow , setBasketShow]=useState(false);

    const handleBasketShow=()=>{
        setBasketShow(!isBasketShow);
    }
    const removeFromBasket=(itemID)=>{
        const newOrder=order.filter(item=>item.id!== itemID);
        setOrder(newOrder);
        toast.error('Goods deleted from basket succesfully!')
    }
    const incrementQuantity=(itemID)=>{
        const newOrder = order.map(item=>{
            if(item.id===itemID){
                const newQuantity=item.quantity+1;
                return {
                    ...item,
                    quantity: newQuantity
                }
            }else{
                return item;
            }
        })
        setOrder(newOrder);
    }
    const decrementQuantity=(itemID)=>{
        const newOrder = order.map(item=>{
            if(item.id===itemID){
                const newQuantity=item.quantity-1;
                return {
                    ...item,
                    quantity: newQuantity >=0?newQuantity:0
                }
            }else{
                return item;
            }
        })
        setOrder(newOrder);
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, [])

    return (
        <div className="content container">
            <Cart quantity={order.length}  handleBasketShow={handleBasketShow}/>
            {loader ? <Loader /> : <GoodList goods={goods} />}
            {isBasketShow &&<BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
            />}
        </div>
    )
}
