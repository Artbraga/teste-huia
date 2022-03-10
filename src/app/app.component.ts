import { Component, HostListener } from '@angular/core';
import { ProdutoService } from './services/produto.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    get carrinhoVazio(): boolean {
        return this.produtoService.carrinhoVazio();
    }

    get mobile(): boolean {
        return this.scrWidth < 650;
    }

    carrinhoAberto: boolean;

    constructor(private produtoService: ProdutoService) {
        this.getScreenSize();
    }

    scrWidth: number;

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.scrWidth = window.innerWidth;
    }

    getValorTotal(): number {
        return this.produtoService.getSubtotal();
    }

    tratarValor(preco: number): string {
        let str = preco.toFixed(2).replace('.', ',');
        return str;
    }
}
