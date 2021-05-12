// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Post from './Post';

// == Composant
const Posts = () => (
  <main className="posts">
    <h1 className="posts-title">Dev of Thrones</h1>
    <div className="posts-list">
      <Post />
      <Post />
      <Post />
    </div>
  </main>
);

// == Export
export default Posts;
