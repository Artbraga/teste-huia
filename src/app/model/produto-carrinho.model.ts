import { Produto } from "./produto.model";

export class ProdutoCarrinho {
    produto: Produto;
    quantidade: number;

    get valorTotal(): number {
        return this.produto.preco * this.quantidade; 
    }

    constructor() {
        this.produto = null;
        this.quantidade = 0;
    }
}