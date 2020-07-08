import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/services/login-auth.service';

interface userAccount {
  label: string;
  route: string;
  img?: string;
}

interface navMenu {
  label: string;
  route: string;
  img?: string;
}

interface navImg {
  label: string;
  route: string;
  img?: string;
}
@Component({
  selector: 'app-layoutHeader',
  templateUrl: './layoutHeader.component.html',
  styleUrls: ['./layoutHeader.component.css']
})
export class LayoutHeaderComponent implements OnInit {

  user: string = null;

  account: userAccount[] = [
    {
      label: "Logar-se",
      route: "/systemLogin",
      img: "../../../assets/imgHeader/login.svg"
    },
    {
      label: "Carrinho",
      route: "/pageCart",
      img: "../../../assets/imgHeader/buy.svg"
    },
    
   
  ]
  navigation: navMenu[] = [
    {
      label: "Página Principal",
      route: "/pageHome",
      img: "../../../assets/imgHeader/home.svg"
    },
    {
      label: "Sobre nós",
      route: "/pageAbout",
      img: "../../../assets/imgHeader/about.svg"
    },
    {
      label: "Rede de descanso",
      route: "/pageProductRedeAdult",
      img: "../../../assets/imgHeader/beauty-treatment.svg"
    },
    {
      label: "Rede Kid",
      route: "/pageProductRedeKid",
      img: "../../../assets/imgHeader/bear.svg"
    },
    {
      label: "Acessórios",
      route: "/pageAccessories",
      img: "../../../assets/imgHeader/customer.svg"
    },
    {
      label: "Contato",
      route: "/pageContact",
      img: "../../../assets/imgHeader/contacts.svg"
    },

  
  ]

  logo: navImg[] = [
    {
      label: "",
      route: "/pageHome",
      img: "../../../assets/imgLogo/LOGO.png"
    },
  ]


  constructor(private loginAuthService: LoginAuthService) {
    
    // this.user = this.loginAuthService.usuario.auth==true ? this.loginAuthService.usuario.userName : null;
    this.user = (this.loginAuthService.getUser() !=null && this.loginAuthService.getUser().auth==true) ? this.loginAuthService.getUser().userName : null;
  
    if (this.user != null) {
      this.account.splice(0, 1);
    }
  }

  logout(){
    this.loginAuthService.fazerLogout();
   
    location.reload();
     
  }

  ngOnInit(): void {
    
  }

}
