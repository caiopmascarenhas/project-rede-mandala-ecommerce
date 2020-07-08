import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {

  idPedido: number;
  data;
  endereco;
  total;
  user: String = null
  listaProdutos;
  listaIds: Array<number> =[]
  listaNome: Array<any> =[]
  listaQtd: Array<number> = []

  
  

  constructor(private router: ActivatedRoute, private userService: UserService, private loginAuthService: LoginAuthService, private product: ProductService) {

    this.idPedido = parseInt(this.router.snapshot.paramMap.get('compra'));
    this.user = (this.loginAuthService.getUser() !=null && this.loginAuthService.getUser().auth==true) ? this.loginAuthService.getUser().userName : null;
    
    userService.getPedido().subscribe((lista) => {
      lista.forEach((pedido) => {
        this.data = pedido.dataPedido
        this.endereco = pedido.enderecoPedido
        this.total = pedido.valorTotal
        if (pedido.idPedido == this.idPedido) {
          pedido.itensPedido.forEach((produto) => {
            this.listaQtd.push(produto.quantidade)
            userService.getProduto(produto.idProduto).subscribe((data) => {
              this.listaNome.push(data)
              let x = this.listaNome.length - 1
              this.listaNome[x]["quantidade"] = produto.quantidade
            })
          })
        }
      })
    })

}

ngOnInit(): void {    
    
}

}