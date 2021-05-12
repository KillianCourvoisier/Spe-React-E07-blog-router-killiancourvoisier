// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

// == Composant
const App = () => (
  <div className="blog">
    <Header list={categoriesData} />
    <Posts list={postsData} />
    <Footer year={2021} />
  </div>
);

// == Export
export default App;
