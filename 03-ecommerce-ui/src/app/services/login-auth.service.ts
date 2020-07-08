import { Injectable, EventEmitter } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


const URL = "http://localhost:8080/login"

interface iuser  {
  auth: boolean,
  userId: number,
  userName: string
};

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements CanActivate {
  

  private usuarioAutenticado = {
    auth: false,
    userId: null,
    userName: ""
  };

  get usuario(){
    return this.usuarioAutenticado
  }



  constructor(private router: Router, private httpClient: HttpClient) {}

  // validação de email e senha
  fazerLogin(user: string[]){

     if(user != null){
      this.usuarioAutenticado = {auth: true, userId: Number(user[0]), userName: user[1]};

      let userJson = JSON.stringify(this.usuarioAutenticado);
      localStorage.setItem("user", userJson);


      this.router.navigate(['/']);

    }
  
  }

  fazerLogout(){
    this.usuarioAutenticado = {
      auth: false,
      userId: null,
      userName: ""
    };

    
    let userJson = JSON.stringify(this.usuarioAutenticado);
    localStorage.setItem("user", userJson);


    // localStorage.removeItem("user");
  }

  verificarUsuario(formGroup: FormGroup){
    let login: string[] = []
    login.push(formGroup.value.user);
    login.push(formGroup.value.password);

    return this.httpClient.post(URL, login);

  }

  
  getUser(): iuser{

    let user: iuser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    return user;
  }

  canActivate() {
    if (this.getUser() == null || this.getUser().auth == false) {
      this.router.navigate(['systemLogin']);
      return false;
    }
    return true;
  }


}
