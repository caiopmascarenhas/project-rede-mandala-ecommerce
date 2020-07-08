import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { LoginAuthService } from 'src/app/services/login-auth.service';


@Component({
  selector: 'app-pageCart',
  templateUrl: './pageCart.component.html',
  styleUrls: ['./pageCart.component.css']
})
export class PageCartComponent implements OnInit {

  quantidade: number = 1
  cart: Cart[];
  totalquantidade: number;
  total: number;

  constructor(private cartService: CartService, private loginService: LoginAuthService) {
    // console.log(loginService.usuario) 
    this.cart = cartService.getProducts();
    cartService.setTotal();
    this.total = Cart.total;
    // console.log(cartService.total);
  }

  deletarDoCarrinho(i: number) {
    this.cartService.deleteProduct(i);
    this.cart = this.cartService.getProducts();
    this.cartService.setTotal();
    this.total = Cart.total;
    console.log(`Delete: ${Cart.total}`)
  }

  precototal() {
    this.cart.forEach((valor) => {
      this.totalquantidade = 77 * this.quantidade
    })
    this.totalquantidade
  }

  ngOnInit(): void {
  }

  //  ATUALIZADO

  aumentarUnidadeProduto(value, i) {
    let cartTemp = this.cart;
    cartTemp[i].qtde = parseInt(value);
    this.cartService.setQuantidade(cartTemp);
    this.cartService.setTotal();
    this.total = Cart.total;
  }

  mostrarCart() {
    console.log(this.total);
    this.cartService.setTotal();
    console.log(this.cart);

  }


  //  Comprar() {
  //       alert("Obrigado por utilizar nossos serviços, até mais :)")
  //   }

}
