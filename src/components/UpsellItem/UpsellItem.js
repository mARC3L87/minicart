import React from 'react';
import './UpsellItem.scss';
import { formatPrice } from '../../utils/utils';

const UpsellItem = ({ upsell, isDesktop }) => {
  return (
    <div className={isDesktop ? 'desktop-item upsell-item' : 'upsell-item'}>
      <div
        className={isDesktop ? 'desktop-upsell-img upsell-img' : 'upsell-img'}
      >
        <img src={upsell.image} alt={upsell.title} />
      </div>
      <div className='upsell-text'>
        <p>{upsell.title}</p>
        <div className='upsell-price'>
          <p>&euro;{formatPrice(upsell.price)}</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default UpsellItem;
