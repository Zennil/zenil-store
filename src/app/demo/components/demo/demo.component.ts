import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'zenil-store';

  power = 10;

  items = ['Edgar', 'Allan', 'Poe'];

  constructor() { }

  ngOnInit(): void { }

  addItem() {
    this.items.push('Agregado');
  }

  deleteItem(index: number) {
    console.log(index);
    this.items.splice(index, 1);
  }

}
