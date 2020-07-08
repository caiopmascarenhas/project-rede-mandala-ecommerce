import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientList',
  templateUrl: './clientList.component.html',
  styleUrls: ['./clientList.component.css']
})
export class ClientListComponent implements OnInit {


  clientes: Array<any> =[]

  constructor(clienteService: ClientesService) { 


    clienteService.getClientes().subscribe((data) => {
      data.forEach(element => {
        this.clientes.push(element)
      });
    })


  }

  ngOnInit(): void {
  }

}
