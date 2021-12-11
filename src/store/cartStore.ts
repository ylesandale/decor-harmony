import { makeAutoObservable } from 'mobx';
import { toJS } from 'mobx';

export interface IProduct {
  title: string;
  subtitle: string;
  price: number;
  img: string;
  imgCounter: number;
  sizes: string;
  id: number;
}

class cart {
  items: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  initializeItems(items: IProduct[]) {
    this.items = items;
  }

  addItemToCart(item: IProduct) {
    this.items.push(item);
  }

  removeItemFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  clearCart() {
    this.items = [];
  }
}

export default new cart();
