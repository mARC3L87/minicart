import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../utils/utils';
import {
  increment,
  decrement,
  removeProduct,
  countTotal,
} from '../../redux/actions/cartActions';
import './CartItem.scss';

const CartItem = ({
  item,
  currency,
  increment,
  decrement,
  removeProduct,
  countTotal,
}) => {
  useEffect(() => {
    countTotal();
  }, [countTotal, increment, decrement, removeProduct]);

  const [count, setCount] = useState(item.qty);

  const increase = () => {
    if (count >= 10) {
      return;
    }
    increment(item.id);
    countTotal();
    setCount(item.qty);
  };

  const decrease = () => {
    if (count <= 1) {
      return;
    }
    decrement(item.id);
    countTotal();
    setCount(item.qty);
  };

  const handleChange = (e) => {
    if (e.target.value === isNaN || e.target.value > 10 || e.target.value < 1) {
      return;
    }
    setCount(e.target.value);
  };

  const deleteProduct = () => {
    removeProduct(item.id);
    countTotal();
  };

  const sum = (countPrice) => {
    const countTimesQty = count * countPrice;
    return countTimesQty;
  };

  return (
    <div className='cart-item-container'>
      <div className='col-wrapper'>
        <div className='col-1'>
          <img src={item.image} alt={item.product_name} />
        </div>
        <div className='col-2'>
          <div className='name-container'>
            <p>{item.product_name}</p>
          </div>
          <div className='options-container'>
            {item.product_options.map((option) => {
              return (
                <ul key={option.id}>
                  <li>
                    {option.id === option.name.toLowerCase() ? option.name : ''}
                    :{' '}
                    <span>
                      {option.id === option.name.toLowerCase()
                        ? option.value
                        : ''}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className='close-small' onClick={() => deleteProduct()}></div>
      </div>
      <div className='col-3'>
        <div className='qty-container'>
          <p>Qty:</p>
          <button className='btn btn-minus' onClick={() => decrease()}>
            -
          </button>
          <input type='text' value={count} onChange={handleChange} />
          <button className='btn btn-plus' onClick={() => increase()}>
            +
          </button>
        </div>
        <div className='price'>
          {item.price.old_price && (
            <p className='old-price'>
              {currency}
              {formatPrice(sum(item.price.old_price))}
            </p>
          )}
          <p>
            {currency}
            {formatPrice(sum(item.price.current_price))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  increment,
  decrement,
  removeProduct,
  countTotal,
})(CartItem);
