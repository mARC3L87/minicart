import React from 'react';

const CartItem = ({ item, currency, shipping }) => {
  return (
    <div className='cart-item-container'>
      <div className='col-1'>
        <img src={item.image} alt={item.product_name} />
      </div>
      <div className='col-2'>
        <h2>{item.product_name}</h2>
        <div className='close-small'></div>
      </div>
      <div className='col-3'>
        {item.product_options.map((option) => {
          return (
            <ul key={option.id}>
              <li>
                {option.id === option.name.toLowerCase() ? option.name : ''}:{' '}
                {option.id === option.name.toLowerCase() ? option.value : ''}
              </li>
            </ul>
          );
        })}
      </div>
      <div className='col-4'>
        <div className='qty-container'>
          <p>Qty:</p>
          <button>-</button>
          <input type='number' value={item.qty} />
          <button>+</button>
        </div>
        <div className='price'>
          {item.price.old_price && (
            <p>
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
  );
};

export default CartItem;
