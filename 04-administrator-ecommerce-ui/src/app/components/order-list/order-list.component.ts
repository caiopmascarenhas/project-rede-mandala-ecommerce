import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  pedidos: Array<any>;
  itens = []


  constructor(private order:OrderService, private product: ProductService) { 
  
    order.getOrders().subscribe((listaPedidos) => {
      this.pedidos = listaPedidos
      this.pedidos.forEach((data) => {
        let listaId = []
        let listaQtd = []
          data.itensPedido.forEach(item => {
              listaId.push(item.idProduto)
              listaQtd.push(item.quantidade)
              product.postLista(listaId).subscribe((element: Array<any>) => {
                element.forEach((nome) => {
                  let nomep = nome.nomeProduto
                  item["nome"] = nomep
                })
            })
          });
      })
    })
  }

  
  ngOnInit(): void {
  }



}
