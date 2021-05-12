// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

const filterPosts = (category) => {
  if (category === 'accueil') {
    return postsData;
  }
  return postsData.filter((articleObject) => articleObject.category.toLowerCase() === category);
};

// == Composant
const App = () => (
  <div className="blog">
    <Header list={categoriesData} />
    <Route exact path="/">
      <Posts list={filterPosts('accueil')} />
    </Route>
    <Route exact path="/angular">
      <Posts list={filterPosts('angular')} />
    </Route>
    <Route exact path="/react">
      <Posts list={filterPosts('react')} />
    </Route>
    <Route exact path="/oclock">
      <Posts list={filterPosts('o’clock')} />
    </Route>
    <Route exact path="/autre">
      <Posts list={filterPosts('autre')} />
    </Route>
    <Footer year={2021} />
  </div>
);

// == Export
export default App;
