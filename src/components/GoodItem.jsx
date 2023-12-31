import React ,{useContext} from 'react'
import {shopContext} from "./context";

export default function GoodItem(props) {
  
  const { id, name, description, price, full_background } = props;
  const {addBasket}=useContext(shopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={()=>addBasket({id, name, price})}>
          Buy
        </button>
        <span className="right" style={{fontSize:"1.8rem"}}>{price}$</span>
      </div>
    </div>
  )
}
