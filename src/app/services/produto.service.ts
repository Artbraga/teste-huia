import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../model/produto.model';
import { PRODUTOS_MOCK } from './produtos.mock';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    produtos: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>(PRODUTOS_MOCK);
    public adicionarProdutoEvent = new EventEmitter<Produto>();

    constructor() { }

    public listarProdutos(): Observable<Produto[]> {
        return this.produtos.asObservable();
    }

    adicionarAoCarrinho(produto: Produto) {
        this.adicionarProdutoEvent.emit(produto)
    }
}
