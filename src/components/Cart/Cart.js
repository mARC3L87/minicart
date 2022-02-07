import React, { useRef, useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import Upsells from '../Upsells/Upsells';
import Order from '../Order/Order';
import { connect } from 'react-redux';
import './Cart.scss';

const Cart = ({ products, openSet }) => {
  useEffect(() => {
    setOpen(openSet);
  }, [openSet]);
  const [open, setOpen] = useState(openSet);
  const ref = useRef();
  const onClick = (e) => {
    if (ref.current.classList.contains('close')) {
      setOpen(!open);
    }
  };
  return (
    <div className={`cart-container ${!open ? 'slideOut' : 'slideIn'}`}>
      <div className='cart-header'>
        <h1>Cart ({products.items.length})</h1>
        <div ref={ref} onClick={() => onClick()} className='close'></div>
      </div>
      <div className='overflow'>
        {products.items.map((item) => {
          return (
            <div className='cart-item' key={item.id}>
              <CartItem item={item} currency={products.currency} />
            </div>
          );
        })}
        <Upsells />
      </div>
      <Order currency={products.currency} shipping={products.shipping} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  openSet: state.open,
});
export default connect(mapStateToProps)(Cart);
