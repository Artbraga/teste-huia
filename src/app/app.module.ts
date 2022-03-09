import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LojaComponent } from './loja/loja.component';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { ItemCarrinhoComponent } from './carrinho/item-carrinho/item-carrinho.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    LojaComponent,
    ItemListaComponent,
    ItemCarrinhoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
