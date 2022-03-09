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
    verMais = false;
    constructor(private produtoServoce: ProdutoService) { }

    ngOnInit(): void {
    }

    adicionar() {
        this.produtoServoce.adicionarAoCarrinho(this.produto);
    }


    tratarValor(preco: number): string {
        let str = preco.toFixed(2).replace('.', ',');
        return str;
    }
}
