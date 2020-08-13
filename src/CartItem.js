import React from 'react';
//This class can be changed to arrow function as there is no state defined
//inside and hence class is not needed
const CartItem = (props) => {
  
    const { price, title, qty } = props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style= {styles.image} src = {props.product.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              //Doubt : Can we not just directly call onIncreaseQuantity
              onClick={() => props.onIncreaseQuantity(props.product)} 
            />
            <img
              alt="decrease"
              className="action-icons" 
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={() => props.onDecreaseQuantity(props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={()=>props.onDelete(props.product.id)}
            />
          </div>
        </div>
      </div>
    );
  
}


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background : '#ccc'
  }
}

export default CartItem;