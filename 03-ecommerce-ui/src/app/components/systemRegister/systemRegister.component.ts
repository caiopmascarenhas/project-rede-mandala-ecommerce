import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { Validation } from 'src/app/models/Validation';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var $: any

@Component({
  selector: 'app-systemRegister',
  templateUrl: './systemRegister.component.html',
  styleUrls: ['./systemRegister.component.css']
})
export class SystemRegisterComponent implements OnInit {

 
  formRegister: FormGroup;

  constructor(private toastr: ToastrService, private router: Router, private fb: FormBuilder, private cepService: CepService, private registerService: RegisterService) { }

  private createForm():FormGroup{
    return this.fb.group({
      email:new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      novaSenha:new FormControl('', Validators.compose([Validators.required])),
      confirmarSenha:new FormControl('', Validators.compose([Validators.required])),
      nome:new FormControl("", Validators.compose([Validators.required])),
      sobrenome:new FormControl("", Validators.compose([Validators.required])),
      nasc:new FormControl("", Validators.compose([Validation.AnoBissexto, Validation.MaiorQue18Anos])),
      cpf:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validation.cpfValidate
      ])),
      cep:new FormControl("",
        Validators.compose([
            Validators.required,
            Validators.minLength(8),
          ])
      ),
      endereco:new FormControl("", 
        Validators.compose([Validators.required])),
      bairro:new FormControl("",
        Validators.compose([Validators.required])),
      numero:new FormControl("",
        Validators.compose([Validators.required])),
      complemento:new FormControl(""),
      estado:new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2)
        ])),
      cidade:new FormControl("",
        Validators.compose([Validators.required]))
    }, { validator: Validation.passwordValidate});
  }

  enviarForm(){

    this.registerService.Cadastrar(this.formRegister).subscribe(
      (data) => {
        $("#exampleModal").modal('show');
        // this.router.navigate(['/login']);
      },(erro)=>{
        this.email.setErrors({emailCadastrado:true})
        
      }
    )
  }

  pegarCep(){
    this.cepService.getCep(this.formRegister.value).subscribe((data) => {
      this.formRegister.controls['endereco'].patchValue(data.logradouro);
      this.formRegister.controls['bairro'].patchValue(data.bairro);
      this.formRegister.controls['estado'].patchValue(data.uf);
      this.formRegister.controls['cidade'].patchValue(data.localidade);
    })
  }

  ngOnInit() {
    this.formRegister = this.createForm();
  }
  get numero() {
    return this.formRegister.get('numero');
  }
  get cep() {
    return this.formRegister.get('cep');
  }
  get sobrenome() {
    return this.formRegister.get('sobrenome');
  }
  get nome() {
    return this.formRegister.get('nome');
  }

  get novaSenha() {
    return this.formRegister.get('novaSenha');
  }

  get email() {
    return this.formRegister.get('email');
  }


  get cpf() {
    return this.formRegister.get('cpf');
  }

  get nasc() {
    return this.formRegister.get('nasc');
  }

   
  get confirmPassword() {
    return this.formRegister.get('confirmarSenha');
  }



}
