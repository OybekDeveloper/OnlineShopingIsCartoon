import React from 'react';

const BasketItem = (props) => {
    const {id, name ,price , quantity}=props;
    return (
        <li className="collection-item">
            {name}  x{quantity}={price*quantity}
        <span className="secondary-content">
            <i className="material-icons basket-delete"
               onClick={()=>props.removeFromBasket(id)}
            >delete_forever</i>
        </span>
        </li>
    );
};

export default BasketItem;