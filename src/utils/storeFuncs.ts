import Cookies from 'js-cookie';
import { IProduct } from 'store/cartStore';
import favorites from 'store/favoritesStore';
import cart from 'store/cartStore';

export const onAddItemToFavorites = (item: IProduct) => {
  const favoritesCookie = Cookies.get('favorites');
  favorites.addItemToFavorites(item);

  if (favoritesCookie) {
    Cookies.set('favorites', [favoritesCookie, JSON.stringify(item)], {
      expires: 7,
    });
  } else {
    Cookies.set('favorites', [JSON.stringify(item)], { expires: 7 });
  }
};

export const onAddItemToCart = (item: IProduct) => {
  const cartCookies = Cookies.get('cart');
  cart.addItemToCart(item);

  if (cartCookies) {
    Cookies.set('cart', [cartCookies, JSON.stringify(item)], {
      expires: 7,
    });
  } else {
    Cookies.set('cart', [JSON.stringify(item)], { expires: 7 });
  }
};

export const clearCart = () => {
  Cookies.remove('cart');
  cart.clearCart();
};
