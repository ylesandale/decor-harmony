import { makeAutoObservable } from 'mobx';
import { IProduct } from './cartStore';

class favorites {
  items: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  initializeItems(items: IProduct[]) {
    this.items = items;
  }

  addItemToFavorites(item: IProduct) {
    this.items.push(item);
  }

  removeItemFromFavorites(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export default new favorites();
