import React from 'react';

const BlogCardImage = ({ src, title, height }) => {
  return (
    <img
      style={{
        width: '100%',
        height: height,
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
        cursor: 'pointer',
      }}
      src={src}
      alt={title}
    />
  );
};

export default BlogCardImage;
