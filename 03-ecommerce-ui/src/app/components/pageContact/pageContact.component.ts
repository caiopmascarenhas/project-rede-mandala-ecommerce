import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/login-auth.service';
@Component({
  selector: 'app-pageContact',
  templateUrl: './pageContact.component.html',
  styleUrls: ['./pageContact.component.css']
})
export class PageContactComponent implements OnInit {
  formLogin : FormGroup;
  constructor(private loginAuthService: LoginAuthService, private fb: FormBuilder) { }
  private createForm(): FormGroup{
    return this.fb.group({
    
      nome:new FormControl(null, Validators.compose([
        Validators.required
        
      ])),
      email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.email
    ]))
    })
}
  ngOnInit(): void {
    this.formLogin = this.createForm();
  }
  fazerLogin(){
    // console.log(this.login);
    this.loginAuthService.verificarUsuario(this.formLogin).subscribe((data: string[] )=>{
      this.loginAuthService.fazerLogin(data);
    });
  }
}