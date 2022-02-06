import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../utils/utils';
import './Order.scss';

const Order = ({ currency, shipping, total }) => {
  if (total.length === 0) {
    return null;
  }
  return (
    <div className='total-container'>
      <div className='shipping'>
        <p>Shipping:</p>
        <p>{`${currency} ${formatPrice(shipping)}`}</p>
      </div>
      <div className='order-total'>
        <p>Order Total:</p>
        <p>
          {currency}
          {!total && total.length === 0
            ? formatPrice(shipping)
            : formatPrice(total)}
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
