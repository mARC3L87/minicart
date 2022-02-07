import React from 'react';
import { connect } from 'react-redux';
import { openTrue } from '../../redux/actions/openActions';
import './Button.scss';

const Button = ({ openTrue, openSt }) => {
  return (
    <div>
      <button className='btn-click' onClick={() => openTrue()}>
        Click
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  openSt: state.open,
});
export default connect(mapStateToProps, { openTrue })(Button);
