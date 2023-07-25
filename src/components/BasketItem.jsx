import React from 'react';

const BasketItem = (props) => {
    const {id, name ,price , quantity,incrementQuantity,decrementQuantity}=props;
    return (
        <li className="collection-item">
            {name}  x{quantity}={price*quantity}
        <span className="secondary-content spanMob">
            <a className="waves-effect waves-light btn-small btnAll"
               onClick={()=>incrementQuantity(id)}>
                <i className="material-icons incrementOne">exposure_plus_1</i> </a>
            <a className="waves-effect waves-light btn-small btnAll"
               onClick={()=>decrementQuantity(id)}>
                <i className="material-icons decrementOne">exposure_minus_1</i> </a>
            <a className="waves-effect waves-light btn-small btnAll"
               onClick={()=>props.removeFromBasket(id)}>
                <i className="material-icons basket-delete">delete_forever</i></a>
        </span>
        </li>
    );
};

export default BasketItem;