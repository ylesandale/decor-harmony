import { makeAutoObservable } from 'mobx';

interface IProduct {
  title: string;
  subtitle: string;
  price: string;
  imgSrc: string;
}

class cart {
  items: number[] = [];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addItemToCart(item: number) {
    this.items.push(item);
  }
}

export default new cart();
