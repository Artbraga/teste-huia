import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdutoCarrinho } from 'src/app/model/produto-carrinho.model';
import { Produto } from 'src/app/model/produto.model';

@Component({
    selector: 'app-item-carrinho',
    templateUrl: './item-carrinho.component.html',
    styleUrls: ['./item-carrinho.component.scss']
})
export class ItemCarrinhoComponent implements OnInit {
    @Input() produtoCarrinho: ProdutoCarrinho;
    @Output() adicionarProduto = new EventEmitter<Produto>();
    @Output() removerProduto = new EventEmitter<Produto>();

    produto: Produto;
    constructor() { }

    ngOnInit(): void {
        this.produto = this.produtoCarrinho.produto;
    }

    getDescricaoReduzida(): string {
        return this.produtoCarrinho.produto.descricao.substring(0, 50) + '...';
    }

    clickQuantidade(adicionar: boolean) {
        if (adicionar) this.adicionarProduto.emit(this.produto);
        else this.removerProduto.emit(this.produto);
    }
}
