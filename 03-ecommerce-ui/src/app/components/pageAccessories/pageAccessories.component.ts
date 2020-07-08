import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/models/jsonapi.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-pageAccessories',
  templateUrl: './pageAccessories.component.html',
  styleUrls: ['./pageAccessories.component.css']
})
export class PageAccessoriesComponent implements OnInit {
  apiProduct:any = [];
  acessorios:any = [];
  erro: any;
  constructor(private productService: ProductService) {this.getter(); }
  ngOnInit(): void {
  }
  getter() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProduct = data;
        this.acessorios = this.apiProduct.filter((el) => {
          return el.categoria == 1;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }
}











