import React from 'react'
import GoodItem from './GoodItem';

export default function GoodList(props) {
    const { goods = [] } = props;
    if (!goods.length) {
        return (<h1>Nothing here</h1>)
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem key={item.id}{...item} />
            ))}
        </div>
    )
}
