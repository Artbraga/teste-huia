import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../model/produto.model';
import { PRODUTOS_MOCK } from './produtos.mock';

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
    produtos: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>(PRODUTOS_MOCK);

    constructor() { }

    public listarProdutos(): Observable<Produto[]> {
        return this.produtos.asObservable();
    }
}
