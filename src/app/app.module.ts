import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LojaComponent } from './loja/loja.component';
import { ItemListaComponent } from './item-lista/item-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    LojaComponent,
    ItemListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
