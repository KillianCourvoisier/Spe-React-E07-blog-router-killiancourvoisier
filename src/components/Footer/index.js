// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Footer = ({ year }) => (
  <footer className="copyright"> Dev of Thrones, le blog du dev React - {year}</footer>
);

Footer.defaultProps = {
  year: 2020,
};

Footer.propTypes = {
  year: PropTypes.number,
};

// == Export
export default Footer;
