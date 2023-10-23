import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items here
  ];

  getItems() {
    return Promise.resolve(this.items);
  }

  addItem(item: any) {
    this.items.push(item);
  }

  updateItem(item: any) {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
