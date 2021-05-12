// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';

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
    <Switch>
      {
        categoriesData.map((categoryObject) => (
          <Route exact key={categoryObject.route} path={categoryObject.route}>
            <Posts list={filterPosts(categoryObject.label)} />
          </Route>
        ))
      }
      <Redirect frome="/jquery" to="/react" />
      <NotFound />
    </Switch>
    <Footer year={2021} />
  </div>
);

// == Export
export default App;
