import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/models/jsonapi.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pageProductKid',
  templateUrl: './pageProductKid.component.html',
  styleUrls: ['./pageProductKid.component.css']
})
export class PageProductKidComponent implements OnInit {

  apiProduct: any = [];
  redesKid: any = [];
  erro: any;

  constructor(private productService: ProductService) { this.getter();}

  ngOnInit(): void {
  }

  getter() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProduct = data;
        this.redesKid = this.apiProduct.filter((el) => {
          return el.categoria == 3;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }
}
