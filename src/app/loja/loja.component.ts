import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
    selector: 'app-loja',
    templateUrl: './loja.component.html',
    styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

    produtos: Produto[];
    constructor(private produtoService: ProdutosService) { }

    ngOnInit(): void {
        this.produtoService.listarProdutos().subscribe(data => {
            this.produtos = data;
        });
    }

}
