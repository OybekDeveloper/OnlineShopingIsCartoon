import React, { useState, useEffect } from 'react';
import '../App.css';
import Loader from './Loader';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodList';
import Cart from './Cart';
import BasketList from "./BacketList";

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [loader, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBacketShow , setBacketShow]=useState(false);

    // Maxsilotlarni savatchaga qo'shish
    const addBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        )
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else { return orderItem }
            }
            )
            setOrder(newOrder);
        }
    }
    //Barcha elementlarni api da olib cart ko'rinishida webApp ga chiqarish
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

    const handleBasketShow=()=>{
        setBacketShow(!isBacketShow);
    }
    const removeFromBasket=(itemID)=>{
        const newOrder=order.filter(item=>item.id!== itemID);
        setOrder(newOrder);
    }
    return (
        <div className="content container">
            <Cart quantity={order.length}  handleBasketShow={handleBasketShow}/>
            {loader ? <Loader /> : <GoodList goods={goods} addBasket={addBasket} />}
            {isBacketShow &&<BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
            />}
        </div>
    )
}
