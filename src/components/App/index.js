// == Import npm
import React, { useState } from 'react';
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
const App = () => {
  const [state, setState] = useState({
    count: 0,
    prenom: 'BG',
  });
  return (
    <div className="blog">
      <Header list={categoriesData} />
      <p>Bienvenu {state.prenom} . T'as Master-click {state.count} fois sur le bouton</p>
      <button
        type="button"
        onClick={() => {
          setState({
            ...state,
            count: state.count + 1,
          });
        }}
      >Cliquez-moi
      </button>
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
};

// == Export
export default App;
