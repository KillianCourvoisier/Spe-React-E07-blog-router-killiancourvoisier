// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Post from './Post';

// == Composant
const Posts = ({ list }) => (
  <main className="posts">
    <h1 className="posts-title">Dev of Thrones</h1>
    <div className="posts-list">
      {
        list.map((postObject) => (
          <Post
            key={postObject.id}
            {...postObject}
          />
        ))
      }

    </div>
  </main>
);

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,

  })).isRequired,
};

// == Export
export default Posts;
