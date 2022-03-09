import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoCarrinho } from '../model/produto-carrinho.model';
import { Produto } from '../model/produto.model';
import { ProdutoService } from '../services/produto.service';
import { SedexService } from '../services/sedex.service';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
    maskCEP = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    produtosCarrinho$: Observable<ProdutoCarrinho[]>;
    cepEntrega: string;
    valorFrete: number;
    constructor(private produtoService: ProdutoService, private sedexService: SedexService) {
        this.produtosCarrinho$ = this.produtoService.produtosCarrinho$.asObservable();
    }

    ngOnInit(): void {
        this.produtoService.adicionarProdutoEvent.subscribe(produto => {
            this.adicionarProduto(produto);
        });
        this.valorFrete = 15;
    }


    adicionarProduto(produto: Produto) {
        this.produtoService.adicionarAoCarrinho(produto);
    }

    removerProduto(produto: Produto) {
        this.produtoService.removerProduto(produto);
    }

    getSubtotal(): number {
        return this.produtoService.getSubtotal();
    }

    getValorTotal(): number {
        return this.getSubtotal() + this.valorFrete;
    }

    pesquisarCep() {
        if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cepEntrega)) {
            this.sedexService.calcularFrete(this.cepEntrega)
                .subscribe(result => {
                    console.log(result);
                }, error => {
                    console.log(error);
                });
        }
    }

    tratarValor(preco: number): string {
        let str = preco.toFixed(2).replace('.', ',');
        return str;
    }
}
