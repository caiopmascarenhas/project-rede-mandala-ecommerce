import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';

@Component({
  selector: 'app-userOrders',
  templateUrl: './userOrders.component.html',
  styleUrls: ['./userOrders.component.css']
})
export class UserOrdersComponent implements OnInit {

  pedidos: any = []
  usuario: any;
  

  constructor(private userService: UserService, private loginService: LoginAuthService) { 


    userService.getPedido().subscribe((valor) => {
      
    })

    this.usuario = loginService.usuario.userName

    userService.getProfile().subscribe((data) => {
      this.usuario = data.nomeUsuario + " " + data.sobrenomeUsuario;
      
    })

      userService.getPedido().subscribe((data) => {
        data.forEach((valor, i) => {
          this.pedidos.push(data[i]);
        })
      })

  }

  ngOnInit(): void {
  }

}
