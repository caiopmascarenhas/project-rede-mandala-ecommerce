import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Produto';

@Component({
  selector: 'app-productAlter',
  templateUrl: './productAlter.component.html',
  styleUrls: ['./productAlter.component.css']
})
export class ProductAlterComponent implements OnInit {


  id: number;
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
  produto: Product

  constructor(private productService: ProductService, private router: ActivatedRoute) {

    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    
    productService.getApiParam(this.id).subscribe((data) => {
      this.produto = data
    })
  
    

   }


  ngOnInit(): void {

  }

  teste(){
    
    if(this.nomeProduto != null){
      this.produto.nomeProduto = this.nomeProduto
    }

    if(this.subtitulo != null){
      this.produto.subTitulo = this.subtitulo
    }

    if(this.descricao != null){
      this.produto.descricaoProduto = this.descricao
    }

    if(this.dimensao != null){
      this.produto.dimensoesProduto = this.dimensao
    }

    if(this.comprimento != null){
      this.produto.comprimentoProduto = this.comprimento
    }

    if(this.peso != null){
      this.produto.pesoProduto = this.peso
    }

    if(this.valorSemDesconto != null){
      this.produto.desconto = this.valorSemDesconto
    }

    if(this.valorComDesconto != null){
      this.produto.valorProduto = this.valorComDesconto
    }

    if(this.imagemPrincipal != null){
      this.produto.imagemPrincipal = this.imagemPrincipal
    }

    if(this.imagemSecundaria != null){
      this.produto.imagemSecundaria = this.imagemSecundaria
    }

    if(this.categoria != null){
      this.produto.categoria = this.categoria
    }

    this.productService.atualizarProduto(this.produto).subscribe((data) => {
      
    })

  }

}
