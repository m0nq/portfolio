// __mocks__/next-image.js
import React from 'react';

const NextImage = (props) => {
  const { priority, fill, src, alt, ...rest } = props;
  const normalizedSrc = typeof src === 'string' ? src : src?.src ?? '';
  return <img src={normalizedSrc} alt={alt ?? ''} {...rest} />;
};

export default NextImage;
