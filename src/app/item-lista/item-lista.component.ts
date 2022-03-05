import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-item-lista',
    templateUrl: './item-lista.component.html',
    styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent implements OnInit {

    @Input() produto: Produto;
    constructor(private produtoServoce: ProdutoService) { }

    ngOnInit(): void {
    }

    adicionar() {
        this.produtoServoce.adicionarAoCarrinho(this.produto);
    }

}
