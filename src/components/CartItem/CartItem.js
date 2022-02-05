import React from 'react';
import './CartItem.scss';

const CartItem = ({ item, currency }) => {
  return (
    <div className='cart-item-container'>
      <div className='col-1'>
        <img src={item.image} alt={item.product_name} />
      </div>
      <div className='col-wrapper'>
        <div className='col-2'>
          <div className='name-container'>
            <p>{item.product_name}</p>
            <div className='close-small'></div>
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
        <div className='col-3'>
          <div className='qty-container'>
            <p>Qty:</p>
            <button className='btn btn-minus'>-</button>
            <input type='number' />
            <button className='btn btn-plus'>+</button>
          </div>
          <div className='price'>
            {item.price.old_price && (
              <p className='old-price'>
                {currency}
                {item.price.old_price}
              </p>
            )}
            <p>
              {currency}
              {item.price.current_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
