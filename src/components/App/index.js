// == Import npm
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

const filterPosts = (category) => {
  if (category === 'Accueil') {
    return postsData;
  }
  return postsData.filter((articleObject) => articleObject.category === category);
};

// == Composant
const App = () => {
  const [loading, setLoading] = useState(false);
  const toggle = () => setLoading(!loading);
  return (
    <div className="blog">
      <Header list={categoriesData} />
      <button type="button" onClick={toggle}>Toggle Loading</button>
      {
        loading && <Spinner />
      }
      {
        !loading && (
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
        )
      }

      <Footer year={2021} />
    </div>
  );
};

// == Export
export default App;
