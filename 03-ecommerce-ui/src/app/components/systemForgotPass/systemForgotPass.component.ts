import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systemForgotPass',
  templateUrl: './systemForgotPass.component.html',
  styleUrls: ['./systemForgotPass.component.css']
})
export class SystemForgotPassComponent implements OnInit {
  formForgot : FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService, private fb: FormBuilder) { }

  private createForm(): FormGroup{
    return this.fb.group({
      user:new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }



  ngOnInit(): void {
    this.formForgot = this.createForm();
  }
  recuperarSenha(){

    this.userService.esqueciSenha(this.formForgot).subscribe((data)=>{
     
        this.toastr.success("Sua nova senha foi enviada", "Verifique seu email!");
        this.router.navigate(['/login']);
    },(erro)=>{
      this.email.setErrors({emailInexistente: true})
    }
    );
    
  }

  get email() {
    return this.formForgot.get('user');
  }
}
