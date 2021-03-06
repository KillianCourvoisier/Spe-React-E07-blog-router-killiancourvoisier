// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';

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
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPosts = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${URL}/posts/`,
    })
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchCategories = () => {
    setLoading(true);
    axios({
      method: 'get',
      url: `${URL}/categories/`,
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

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
