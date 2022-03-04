import { Produto } from "../model/produto.model";

export const PRODUTOS_MOCK: Produto[] = [
    { 
        nome: 'O Incrível Hulk', 
        descricao: 'Hulk explora as origens de Bruce Banner, que depois de um acidente de laboratório envolvendo radiação gama se torna capaz de se transformar em um enorme monstro de pele verde sempre que ele fica com raiva.', 
        imagem: 'https://br.web.img3.acsta.net/pictures/210/485/21048566_20131010182211313.jpg',
        nota: 4,
        preco: 50.00,
        ano: 2008
    },
    { 
        nome: 'Homem de Ferro', 
        descricao: 'Tony Stark, um industrialista e mestre em engenharia, constrói uma armadura superpoderosa e se torna um super-herói tecnologicamente avançado, o Homem de Ferro.', 
        imagem: 'https://www.megafilmess.com/wp-content/uploads/2018/03/pQOu6ZbJg3LTFIu03p6Q1BVkYXW.jpg',
        nota: 5,
        preco: 200.00,
        ano: 2008
    },
    { 
        nome: 'Thor', 
        descricao: 'O filme conta a história de Thor, o príncipe herdeiro de Asgard, banido à Terra e despojado de seus poderes depois que ele reinicia uma guerra antiga. Como seu irmão, Loki, planeja tomar o trono para ele mesmo, Thor deve provar ser digno e recuperar seu martelo, o Mjöllnir.', 
        imagem: 'https://3.bp.blogspot.com/-KoLM0cjhG88/WmHSFFl4XDI/AAAAAAAAAjs/f5dgtiqols0NDD_KZg4oMmLrsR1A3RKyQCLcBGAs/s1600/Thor.jpg',
        nota: 5,
        preco: 150.00,
        ano: 2011
    },
]