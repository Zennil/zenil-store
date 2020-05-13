import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  // Se ejecuta solo cuando los componentes hijos se han terminado de inicializar
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
