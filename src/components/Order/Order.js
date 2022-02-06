import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../utils/utils';
import './Order.scss';

const Order = ({ currency, shipping, total }) => {
  return (
    <div className='total-container'>
      <div className='shipping'>
        <p>Shipping:</p>
        <p>{`${currency} ${shipping}`}</p>
      </div>
      <div className='order-total'>
        <p>Order Total:</p>
        <p>
          {currency}
          {!total && total.length === 0 ? shipping : total}
        </p>
      </div>
      <input className='btn-submit' type='submit' value='Checkout' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.products.total,
});

export default connect(mapStateToProps)(Order);
