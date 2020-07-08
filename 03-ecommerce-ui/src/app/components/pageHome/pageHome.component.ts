import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/models/jsonapi.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pageHome',
  templateUrl: './pageHome.component.html',
  styleUrls: ['./pageHome.component.css']
})


export class PageHomeComponent implements OnInit {

  apiProduct:any = [];
  redes:any = [];
  erro: any;

  constructor(private productService: ProductService) {

    this.getter();
  }

  ngOnInit(): void {
  }

  getter() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProduct = data;
        this.redes = this.apiProduct.filter((el) => {
          return el.categoria == 2;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }

}
