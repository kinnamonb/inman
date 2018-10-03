import { Component, OnInit } from '@angular/core';

import { Item, DUMMY_ITEMS } from '../item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
	items: Item[] = DUMMY_ITEMS;

  constructor() { }

  ngOnInit() {
  	console.dir(this.items)
  }

  editItem(item: Item) {
  	console.dir(item);
  }

}
