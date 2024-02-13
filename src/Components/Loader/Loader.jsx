import React from 'react';
import image from '../../assets/8.gif';

const Loader = () => {
  return (
    <div>
      <img src={image} alt="Loading" width="70px" />
      <p>Идёт загрузка. Пожалуйста, подождите</p>
    </div>
  );
};

export default Loader;
