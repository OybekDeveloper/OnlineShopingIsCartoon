import React, { useContext } from 'react'
import GoodItem from './GoodItem';
import { shopContext } from './context';

export default function GoodList() {
    const { goods = [] } = useContext(shopContext);
    if (!goods.length) {
        return (<h1>Nothing here</h1>)
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem key={item.id}{...item}/>
            ))}
        </div>
    )
}
