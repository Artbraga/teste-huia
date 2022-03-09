import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProdutoCarrinho } from '../model/produto-carrinho.model';
import { Produto } from '../model/produto.model';
import { PRODUTOS_MOCK } from './produtos.mock';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    produtos: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>(PRODUTOS_MOCK);
    produtosCarrinho$: BehaviorSubject<ProdutoCarrinho[]> = new BehaviorSubject<ProdutoCarrinho[]>([]);
    public adicionarProdutoEvent = new EventEmitter<Produto>();

    constructor() { }

    public listarProdutos(): Observable<Produto[]> {
        return this.produtos.asObservable();
    }

    adicionarAoCarrinho(produto: Produto) {
        let produtoCarrinho = this.produtosCarrinho$.value.find(x => x.produto.id == produto.id);
        if (produtoCarrinho != null) {
            produtoCarrinho.quantidade += 1;
        }
        else {
            produtoCarrinho = new ProdutoCarrinho();
            produtoCarrinho.produto = produto;
            produtoCarrinho.quantidade = 1;
            this.produtosCarrinho$.next(this.produtosCarrinho$.value.concat(produtoCarrinho));
        }
    }

    removerProduto(produto: Produto) {
        const produtoCarrinho = this.produtosCarrinho$.value.find(x => x.produto.id == produto.id);
        if (produtoCarrinho.quantidade == 1) {
            this.produtosCarrinho$.next(this.produtosCarrinho$.value.filter(x => x.produto.id != produto.id));
        }
        else {
            produtoCarrinho.quantidade -= 1;
        }
    }

    getSubtotal(): number {
        let valor = 0;
        this.produtosCarrinho$.value.forEach(pc => {
            valor += pc.produto.preco * pc.quantidade
        });
        return valor
    }

    carrinhoVazio(): boolean {
        return this.produtosCarrinho$.value.length == 0;
    }
}
