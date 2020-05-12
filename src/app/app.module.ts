import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

// Providers

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
