import React, { useEffect } from 'react';
import UpsellItem from '../UpsellItem/UpsellItem';
import { connect } from 'react-redux';
import { fetchUpsells } from '../../redux/actions/upsellAction';
import useMediaQuery from '../hooks/useMediaQuery';
import './Upsells.scss';

const Upsells = ({ upsells, fetchUpsells }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    fetchUpsells();
  }, [fetchUpsells]);
  return (
    <div className='upsell-container'>
      <h1>Recommended Products:</h1>
      <div className={isDesktop ? 'desktop-cards' : 'upsell-cards'}>
        {upsells.map((upsell) => {
          return (
            <div
              className={
                isDesktop ? 'desktop-item-container' : 'upsell-item-container'
              }
              key={upsell.id}
            >
              <UpsellItem upsell={upsell} isDesktop={isDesktop} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  upsells: state.upsells.upsells,
});

export default connect(mapStateToProps, { fetchUpsells })(Upsells);
