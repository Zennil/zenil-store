import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.jpg',
      title: 'Juguete',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.jpg',
      title: 'Cepillo',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.jpg',
      title: 'Atun',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.jpg',
      title: 'Laberinto',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.jpg',
      title: 'Tazón',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.jpg',
      title: 'Cabezal',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find(item => item.id === id);
  }
}
