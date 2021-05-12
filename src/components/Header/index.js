// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ list }) => (
  <header className="menu">
    <nav>
      {
        list.map((categoryObject) => (
          <a
            key={categoryObject.label}
            href={categoryObject.route}
            className="menu-link"
          >
            {categoryObject.label}
          </a>
        ))
      }

    </nav>
  </header>
);

Header.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

// == Export
export default Header;
