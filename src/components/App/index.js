// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default App;
