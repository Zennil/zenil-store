import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from 'src/app/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1: Constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2: NgOnChanges', changes);
    // }

    ngOnInit() {
        console.log('3: NgOnInit');
    }

    ngDoCheck() {
        console.log('4. NgDoCheck');
    }

    ngOnDestroy() {
        console.log('5. NgOnDestroy');
    }

    addCart() {
        this.productClicked.emit(`Agregado al carrito: ${this.product.id}`);
    }

}
