import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-loja',
    templateUrl: './loja.component.html',
    styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

    produtos: Produto[];
    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.produtoService.listarProdutos().subscribe(data => {
            this.produtos = data;
        });
    }

}
