import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  find(id: any): number {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  getProducts(): Cart[]{

    let cart: Cart[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    return cart;
  }

  finalizarCompra(){
    localStorage.removeItem("cart");
  }

  setProduct(produto: Cart){
    produto.qtde = 1
    let cart: Cart[] = this.getProducts();
    cart.push(produto)
    let cartJson = JSON.stringify(cart);
    localStorage.setItem("cart", cartJson);

  }

  deleteProduct(index: number){
    let cart :Cart[]= this.getProducts();
    cart.splice(index, 1);
    let cartJson = JSON.stringify(cart);
    localStorage.setItem("cart", cartJson);   
  }

  setTotal(){
    let cart: Cart[] = this.getProducts();    
    Cart.total = 0;
    cart.forEach((produto) => {
      let array = produto;
      
      // CRIADO
      Cart.total += (array['_valorProduto'] * array['qtde']);
    })

    console.log(Cart.total)
  }

  // CRIADO
  setQuantidade(cart){
    let cartJson = JSON.stringify(cart);
    localStorage.setItem("cart", cartJson);
    this.setTotal();
  }


}
