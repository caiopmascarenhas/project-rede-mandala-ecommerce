import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageAbout',
  templateUrl: './pageAbout.component.html',
  styleUrls: ['./pageAbout.component.css']
})
export class PageAboutComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  alertFace() {


    alert("Á pagina solicitada encontra-se em manutenção. Obrigado! :)")
  }
}