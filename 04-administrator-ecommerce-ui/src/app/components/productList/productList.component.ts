import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Produto';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})




export class ProductListComponent implements OnInit {

  produtoDes: Product
  produtos: Array<any> = []

  constructor(private productService: ProductService) { 

  }

  excluir(i) {
    this.productService.getApiParam(i).subscribe((data) => {
      this.produtoDes = data
      this.produtoDes.categoria = 4
      this.productService.atualizarProduto(this.produtoDes).subscribe((data) => {
      this.ngOnInit()
      })
    })
    
  }

  ngOnInit(): void {
    this.produtos = []
    this.productService.getApi().subscribe((data) => {

      data.forEach(element => {
        this.produtos.push({
          "nomeProduto" : element.nomeProduto,
          "imagem" : element.imagemPrincipal,
          "valorCheio" : element.desconto,
          "valorDesconto" : element.valorProduto,
          "idProduto" : element.idProduto,
          "categoria": element.categoria
        })
      });

    })
  }

}
