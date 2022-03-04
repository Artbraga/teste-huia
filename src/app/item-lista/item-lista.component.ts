import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
    selector: 'app-item-lista',
    templateUrl: './item-lista.component.html',
    styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent implements OnInit {

    @Input() produto: Produto;
    constructor() { }

    ngOnInit(): void {
    }

}
