import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItemsCart$: Observable<number>;

  constructor(private cartService: CartService) {
    this.totalItemsCart$ = this.cartService.cart$.pipe(
      map(productos => productos.length)
    );
  }

  ngOnInit(): void {
  }

}
