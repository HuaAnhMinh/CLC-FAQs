import React from 'react';

import '../styles/components/Header.scss';
import cover from '../assets/cover.jpg';

const Header = props => {
  return (
    <div className="header">
      <img className="header__cover" alt="CTDA cover" src={cover} />
    </div>
  );
};

export default Header;