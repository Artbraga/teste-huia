import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../model/produto-carrinho.model';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

    produtosCarrinho: ProdutoCarrinho[] = [];
    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.produtoService.adicionarProdutoEvent.subscribe(produto => {
            this.adicionarProduto(produto);
        });
    }


    adicionarProduto(produto: Produto) {
        let produtoCarrinho = this.produtosCarrinho.find(x => x.produto.id == produto.id);
        if (produtoCarrinho != null) {
            produtoCarrinho.quantidade += 1;
        }
        else {
            produtoCarrinho = new ProdutoCarrinho();
            produtoCarrinho.produto = produto;
            produtoCarrinho.quantidade = 1;
            this.produtosCarrinho = this.produtosCarrinho.concat(produtoCarrinho);
        }
    }

    removerProduto(produto: Produto) {
        const produtoCarrinho = this.produtosCarrinho.find(x => x.produto.id == produto.id);
        if (produtoCarrinho.quantidade == 1) {
            this.produtosCarrinho = this.produtosCarrinho.filter(x => x.produto.id != produto.id);
        }
        else {
            produtoCarrinho.quantidade -= 1;
        }
    }
}
