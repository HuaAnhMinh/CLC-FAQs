import React from 'react';

import '../styles/components/Header.scss';
import cover from '../assets/clc_cover.jpg';

const Header = props => {
  return (
    <div className="header">
      <img className="header__cover" alt="clc cover" src={cover} />
    </div>
  );
};

export default Header;