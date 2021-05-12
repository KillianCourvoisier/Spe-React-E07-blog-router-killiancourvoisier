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
  if (category === 'Accueil') {
    return postsData;
  }
  return postsData.filter((articleObject) => articleObject.category === category);
};

// == Composant
const App = () => (
  <div className="blog">
    <Header list={categoriesData} />
    {
      categoriesData.map((categoryObject) => (
        <Route exact key={categoryObject.route} path={categoryObject.route}>
          <Posts list={filterPosts(categoryObject.label)} />
        </Route>
      ))
    }
    <Footer year={2021} />
  </div>
);

// == Export
export default App;
