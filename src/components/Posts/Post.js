import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Post = ({
  title, excerpt, category, slug,
}) => (
  <article className="post">
    <Link to={`/articles/${slug}`}>
      <h2 className="post-title">{title}</h2>
    </Link>
    <div className="post-category">{category}</div>
    <p
      className="post-excerpt"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt) }}
    />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
