import React from 'react';
import CartItem from '../CartItem/CartItem';
import Order from '../Order/Order';
import { connect } from 'react-redux';
import './Cart.scss';

const Cart = ({ products }) => {
  console.log(products);
  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h1>Cart(4)</h1>
        <div className='close'></div>
      </div>
      {products.items.map((item) => {
        return (
          <div key={item.id}>
            <CartItem
              item={item}
              currency={products.currency}
              shipping={products.shipping}
            />
          </div>
        );
      })}
      <Order currency={products.currency} shipping={products.shipping} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(Cart);
