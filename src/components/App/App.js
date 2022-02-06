import React from 'react';
import Cart from '../Cart/Cart';
import Button from '../Button/Button';
import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <Button />
      <Cart />
    </div>
  );
};

export default App;
