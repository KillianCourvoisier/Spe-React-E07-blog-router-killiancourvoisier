// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useAjaxWithGet from '../../Hooks/useAjax';

// == Import
import './styles.scss';
import Header from '../Header';
import Posts from '../Posts';
import FullPost from '../Posts/FullPost';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';

const URL = 'https://oblog-sarah-maau.herokuapp.com/api/posts';

// == Composant
const App = () => {
  const [posts, postsLoading] = useAjaxWithGet(`${URL}/posts`);
  const [categories, categoriesLoading] = useAjaxWithGet(`${URL}/categories`);

  const filterPosts = (category) => {
    if (category === 'Accueil') {
      return posts;
    }
    return posts.filter((articleObject) => articleObject.category === category);
  };

  return (
    <div className="blog">
      <Header list={categories} />
      {
        loading && <Spinner />
      }
      {
        !loading && (
        <Switch>
          {
        categories.map((categoryObject) => (
          <Route exact key={categoryObject.route} path={categoryObject.route}>
            <Posts list={filterPosts(categoryObject.label)} />
          </Route>
        ))
      }
          <Route path="/articles/:slug">
            <FullPost list={posts} />
          </Route>
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
