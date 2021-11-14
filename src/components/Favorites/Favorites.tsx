import React from 'react';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';
import LayoutColored from 'components/common/LayoutColored/LayoutColored';

const Favorites = () => {
  return (
    <LayoutColored
      imgSrc="/images/Favorites/FavoritesDoodle.png"
      color="orange"
    >
      <EmptyBlock
        title="Список с избранными товарами пуст."
        subtitle="Добавьте товар."
      />
    </LayoutColored>
  );
};

export default Favorites;
