import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from 'src/app/models/Validation';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userPersonalInformation',
  templateUrl: './userPersonalInformation.component.html',
  styleUrls: ['./userPersonalInformation.component.css']
})
export class UserPersonalInformationComponent implements OnInit {

  formProfile: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private userService: UserService, private router: Router) {

    userService.getProfile().subscribe((data)=>{

      this.formProfile.controls['email'].patchValue(data.emailUsuario);
      this.formProfile.controls['nome'].patchValue(data.nomeUsuario);
      this.formProfile.controls['sobrenome'].patchValue(data.sobrenomeUsuario);
      this.formProfile.controls['nasc'].patchValue(data.dataNascimento);
      this.formProfile.controls['cpf'].patchValue(data.cpfUsuario);
   

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
      nome:new FormControl("", 
      Validators.compose([Validators.required])),
      sobrenome:new FormControl("", Validators.compose([Validators.required])),
      nasc:new FormControl("", Validators.compose([
        Validators.required,
         Validation.AnoBissexto,
          Validation.MaiorQue18Anos])),
      cpf:new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
        Validation.cpfValidate
        
      ]))
    });
  }

  get cpf() {
    return this.formProfile.get('cpf');
  }

  
  get nasc() {
    return this.formProfile.get('nasc');
  }


  enviarForm(){
    this.userService.alterarProfile(this.formProfile).subscribe(
      (data) => {
        this.toastr.success("","Dados alterados com sucesso");
        // this.router.navigate(['/']);
      },(erro)=>{
        this.toastr.error("Alteração não concluída!", "Falha ao alterar os dados");
      }
    )
  }

  ngOnInit(): void {
    this.formProfile = this.createForm();
  }

}
