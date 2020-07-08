import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Produto';

@Component({
  selector: 'app-product-enable',
  templateUrl: './product-enable.component.html',
  styleUrls: ['./product-enable.component.css']
})
export class ProductEnableComponent implements OnInit {

  id: number;
  produtoHab: Product
  categoria: number;

  constructor(private router: ActivatedRoute, private product: ProductService) { 


    this.id = parseInt(this.router.snapshot.paramMap.get('id'))
    
  }

  ngOnInit(): void {
  }

  salvar(){
    this.product.getApiParam(this.id).subscribe((data) => {
      this.produtoHab = data
      this.produtoHab.categoria = this.categoria
      this.product.atualizarProduto(this.produtoHab).subscribe((data) => {
      this.refresh();
      })
    })
  }

  refresh(){
    location.reload();
    sessionStorage.refresh = false;
  }
  

}
