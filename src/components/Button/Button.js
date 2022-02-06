import React from 'react';
import { connect } from 'react-redux';
import { openTrue } from '../../redux/actions/openActions';

const Button = ({ openTrue, openState }) => {
  console.log(openState);
  // const openClick = () => {
  //   openTrue();
  //   console.log('open');
  // };
  return (
    <div>
      <button onClick={() => openTrue()}>Click</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  openState: state.open,
});
export default connect(mapStateToProps, { openTrue })(Button);
