import React, {  useEffect, useContext } from 'react';
import '../App.css';
import Loader from './Loader';
import { API_KEY, API_URL } from '../config';
import GoodList from './GoodList';
import Cart from './Cart';
import BasketList from "./BasketList";  
import { shopContext } from './context';

export default function Shop() {
    const { setGoods,loader,order , isBasketShow}=useContext(shopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.featured);
            })
    }, [])

    return (
        <div className="content container">
            <Cart quantity={order.length}/>
            {loader ? <Loader /> : <GoodList/>}
            {isBasketShow &&<BasketList/>}
        </div>
    )
}
