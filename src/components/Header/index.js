// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = () => (
  <header className="menu">
    <nav>
      <a className="menu-link">Lien</a>
      <a className="menu-link active">Lien</a>
    </nav>
  </header>
);

// == Export
export default Header;
