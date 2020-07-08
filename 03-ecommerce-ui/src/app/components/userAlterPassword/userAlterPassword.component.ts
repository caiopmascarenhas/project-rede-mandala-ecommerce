import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from 'src/app/models/Validation';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-userAlterPassword',
  templateUrl: './userAlterPassword.component.html',
  styleUrls: ['./userAlterPassword.component.css']
})
export class UserAlterPasswordComponent implements OnInit {

  formPassword: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private userService: UserService, private router: Router) {
    userService.getProfile().subscribe((data)=>{

      this.formPassword.controls['email'].patchValue(data.emailUsuario);
   

    })
   }

  private createForm():FormGroup{
    return this.fb.group({
      email:new FormControl("",
          Validators.compose([
            Validators.required,
            Validators.email
          ])
        ),
      senhaAtual:new FormControl('', Validators.compose([Validators.required])),
      novaSenha:new FormControl('', Validators.compose([Validators.required])),
      confirmarSenha:new FormControl('', Validators.compose([Validators.required])),
    
    }, { validator: Validation.passwordValidate});
  }

  enviarForm(){
    this.userService.alterarSenha(this.formPassword).subscribe(
      (data) => {
        // $("#acceptModal").modal('show');
        this.toastr.success("", "Senha alterada com sucesso!");
        // console.log(data);
        // this.router.navigate(['/']);
      }, (erro) => {
        this.toastr.error("Senha atual incorreta", "Falha ao alterar senha");
        // $("#ErroModal").modal('show');
        // console.log(erro.status);
      }
    )
  }

  get confirmarSenha() {
    return this.formPassword.get('confirmarSenha');
  }


  ngOnInit(): void {
    this.formPassword = this.createForm();

  }

}
