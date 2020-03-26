import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtosCarrinhos = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onAddCarrinho(evento){
    console.log("idProduto: " + evento.idProduto + " nomeProduto: " + evento.nomeProduto);
    console.log(this.produtosCarrinhos);
    this.produtosCarrinhos.push({
      id:evento.idProduto, nome:evento.nomeProduto
    })
  }

}
