import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import NotFound from '../NotFound';

const FullPost = ({ list }) => {
  const articleSlug = useParams();

  const article = list.find((articleObject) => articleObject.slug === articleSlug);

  if (!article) return <NotFound />;

  const { title, content, category } = article;

  return (
    <article className="post full">
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
    </article>
  );
};

FullPost.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,

  })).isRequired,
};

export default FullPost;
