import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItemsCart: number;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(response => {
      console.log(response);
      this.totalItemsCart = response.length;
    });
  }

  ngOnInit(): void {
  }

}
