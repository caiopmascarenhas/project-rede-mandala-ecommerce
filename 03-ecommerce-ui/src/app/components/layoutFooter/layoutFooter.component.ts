import { Component, OnInit } from '@angular/core';

interface navMenu {
  label: string;
  route: string;
}

interface navContact {
  label: string;
  route: string;
}


@Component({
  selector: 'app-layoutFooter',
  templateUrl: './layoutFooter.component.html',
  styleUrls: ['./layoutFooter.component.css']
})
export class LayoutFooterComponent implements OnInit {

  navigation: navMenu[] = [
    {
      label: "Página Principal",
      route: "/pageHome",
    },
    {
      label: "Sobre nós",
      route: "/pageAbout",
    },
    {
      label: "Rede de descanso",
      route: "/pageProductRedeAdult",
      // img:"url..."
    },
  ]

  contact: navContact[] = [
    {
      label: "CLIQUE AQUI!",
      route: "/pageContact",
      // img:"url..."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  alertFace() {
    
  
      alert("Á pagina solicitada encontra-se em manutenção. Obrigado! :)")
  

}
}