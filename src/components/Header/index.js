// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Header = ({ list }) => (
  <header className="menu">
    <nav>
      {
        list.map((categoryObject) => (
          <NavLink
            exact
            key={categoryObject.label}
            to={categoryObject.route}
            className="menu-link"
          >
            {categoryObject.label}
          </NavLink>
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
