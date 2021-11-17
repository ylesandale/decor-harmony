import React from 'react';

const scrollTo = (
  ref: React.RefObject<HTMLElement>,
  options?: ScrollIntoViewOptions
) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      ...options,
    });
  }
};

export default scrollTo;
