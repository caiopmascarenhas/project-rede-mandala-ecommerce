import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-systemLogin',
  templateUrl: './systemLogin.component.html',
  styleUrls: ['./systemLogin.component.css']
})
export class SystemLoginComponent implements OnInit {
  
  formLogin : FormGroup;
  
  constructor(private toastr: ToastrService, private loginAuthService: LoginAuthService, private fb: FormBuilder) {}
  private createForm(): FormGroup{
    return this.fb.group({
      user:new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),

    password: new FormControl("", Validators.compose([
      Validators.required
    ]))

    })
  }


  ngOnInit() {
    this.formLogin = this.createForm();
  }


  fazerLogin(){
    // console.log(this.login);
    this.loginAuthService.verificarUsuario(this.formLogin).subscribe((data: string[] )=>{
      if(data == null){
        this.toastr.error("Usuário ou senha incorretos", "Tente novamente!");
      }else{
        
      this.loginAuthService.fazerLogin(data);
    }
    });
  }
}