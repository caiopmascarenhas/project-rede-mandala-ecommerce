import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productAdd',
  templateUrl: './productAdd.component.html',
  styleUrls: ['./productAdd.component.css']
})
export class ProductAddComponent implements OnInit {

  nomeProduto;
  subtitulo;
  descricao;
  dimensao;
  comprimento;
  peso;
  valorSemDesconto;
  valorComDesconto;
  imagemPrincipal;
  imagemSecundaria;
  categoria;
  


  constructor(private prod: ProductService) { 

    
    
  }

  teste(){
    this.prod.enviarProduto(this.nomeProduto,this.subtitulo,this.descricao,this.dimensao,
      this.comprimento,this.peso,parseInt(this.valorSemDesconto),parseInt(this.valorComDesconto),
      this.imagemPrincipal,this.imagemSecundaria,parseInt(this.categoria))

  
  }

  ngOnInit(): void {
  }

  


}
