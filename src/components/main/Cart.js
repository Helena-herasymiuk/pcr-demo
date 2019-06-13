import React from 'react';

const Cart = (props) => (
  <div className="cart">
    <p>Shopping Cart</p>
    <ul className="cart_ul">
      { Object.entries(props.name).map(([item, index]) => (
        <li key={item + index} 
            className="cart_item">
          {item} - {index}
          <button 
              className="btn cart_btn"
              onClick ={()=> {
                props.onDeletePhone(item)}}
          >
          x</button>
        </li>
      )) }
    </ul>
  </div>
);

export default Cart;