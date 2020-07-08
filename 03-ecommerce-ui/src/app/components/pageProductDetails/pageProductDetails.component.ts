import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ApiProduct } from 'src/app/models/jsonapi.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-pageProductDetails',
  templateUrl: './pageProductDetails.component.html',
  styleUrls: ['./pageProductDetails.component.css']
})

export class PageProductDetailsComponent implements OnInit {
  apiProduct = new ApiProduct;
  erro: any;
  id: Number = 0;
  produto: Product = new Product(1, '', '', '', '', '', '', 0, 0, '', '', 0);
  imagemPrimaria: any = '';
  imagemSecundaria: any = '';

  apiProductAdulto: any = [];
  redesAdulto: any = [];
  apiProductKid: any = [];
  redesKid: any = [];
  apiProductAcessorios: any = [];
  acessorios: any = [];


  constructor(private cartService: CartService, private router: ActivatedRoute, private productService: ProductService) {
    this.getterRedeAdulto();
    this.getterRedeKid();
    this.getterAcessorios();
  }
  MandarAoCarrinho(produto): void {
    this.cartService.setProduct(produto)
  }
  ngOnInit(): void {
    let idt = this.router.snapshot.paramMap.get('id');
    console.log(idt);
    this.getter();
    this.id = parseInt(idt);

  }
  getter() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProduct = data;
        this.mostrarProduto();
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }
  mostrarProduto() {
    let array: any = [];
    array = this.apiProduct;
   
    let novo = array.filter(e => e.idProduto === this.id);
    this.produto = new Product(novo[0].idProduto, novo[0].nomeProduto, novo[0].subTitulo, novo[0].descricaoProduto, novo[0].dimensoesProduto, novo[0].comprimentoProduto, novo[0].pesoProduto, novo[0].desconto, novo[0].valorProduto, novo[0].imagemPrincipal, novo[0].imagemSecundaria, novo[0].categoria);
    this.imagemPrimaria = novo[0].imagemPrincipal;
    this.imagemSecundaria = novo[0].imagemSecundaria;
    // console.log(this.produto)

  }
  show(produto) {
    console.log(produto);
  }

  getterAcessorios() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProductAcessorios = data;
        this.acessorios = this.apiProductAcessorios.filter((el) => {
          return el.categoria == 1;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })   
  }

  getterRedeAdulto() {
    
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProductAdulto = data;
        this.redesAdulto = this.apiProductAdulto.filter((el) => {
          return el.categoria == 2;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }

  getterRedeKid() {
    this.productService.getApi().subscribe(
      (data: ApiProduct) => {
        this.apiProductKid = data;
        this.redesKid = this.apiProductKid.filter((el) => {
          return el.categoria == 3;
        })
      }, (error: any) => {
        console.error("ERROR", error)
      })
  }

  alterarProduto(){
    this.ngOnInit();
  }

}
