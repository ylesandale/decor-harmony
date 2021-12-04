import React from 'react';

interface IPictureProps {
  srcSets: {
    xl?: string;
    lg?: string;
    md?: string;
    sm?: string;
    desktopXl?: string;
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
  defaultSrc: string;
  alt: string;
  className?: string;
}

const Picture = ({ srcSets, defaultSrc, alt, className }: IPictureProps) => {
  return (
    <picture className={className}>
      {srcSets.xl && <source media="(min-width: 1280px)" srcSet={srcSets.xl} />}
      {srcSets.lg && (
        <source
          media="(min-width: 992px) and (max-width: 1279px)"
          srcSet={srcSets.lg}
        />
      )}
      {srcSets.md && (
        <source
          media="(min-width: 768px) and (max-width: 991px)"
          srcSet={srcSets.md}
        />
      )}
      {srcSets.sm && <source media="(max-width: 767px)" srcSet={srcSets.sm} />}
      <img src={defaultSrc} alt={alt} />
    </picture>
  );
};

export default Picture;
