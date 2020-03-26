import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  produtos = [
    {id: '0001', nome: "V LCD 40"},
    {id: '0002', nome: "Video-Game PSX"},
    {id: '0003', nome: "Livro ABCX"},
    {id: '0004', nome: "Celular ASX"},
  ];

  @Output() adicionaCarrinho = new EventEmitter();
  itemsCarrinho:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public addProduto(id ,nome){
    this.adicionaCarrinho.emit({idProduto: id, nomeProduto:nome});
    this.itemsCarrinho++;
  }

}
