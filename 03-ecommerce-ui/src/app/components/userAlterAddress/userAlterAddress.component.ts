import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-userAlterAddress',
  templateUrl: './userAlterAddress.component.html',
  styleUrls: ['./userAlterAddress.component.css']
})
export class UserAlterAddressComponent implements OnInit {

  enderecos: any = [];
  formAddress: FormGroup;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private cepService: CepService, private userService: UserService, private router: Router) {
    
   
    }

  
  private createForm(): FormGroup {
    return this.fb.group({
      cep: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)]
        )
      ),
      endereco: new FormControl("",
        Validators.compose([Validators.required])),
      bairro: new FormControl("",
        Validators.compose([Validators.required])),
      numero: new FormControl("",
        Validators.compose([Validators.required])),
      complemento: new FormControl(""),
      estado: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2)
        ])),
      cidade: new FormControl("",
        Validators.compose([Validators.required]))
    });
  }

  pegarCep() {
    this.cepService.getCep(this.formAddress.value).subscribe((data) => {
      this.formAddress.controls['endereco'].patchValue(data.logradouro);
      this.formAddress.controls['bairro'].patchValue(data.bairro);
      this.formAddress.controls['estado'].patchValue(data.uf);
      this.formAddress.controls['cidade'].patchValue(data.localidade);
    })
  }

  enviarForm() {
    this.userService.adicionarEndereco(this.formAddress).subscribe(
       (data) => {
      this.toastr.success("", "Endereço adicionado")
        
        this.ngOnInit();

       }
     )
  }

  deletar(id: number){
    this.userService.deletarEndereco(id).subscribe((data)=>
    {
      this.toastr.success("", "Endereço excluído")
      this.ngOnInit();

    },(erro)=>{
      console.log(erro)
      this.toastr.error("", erro.error.message)
      // location.reload();
    })
  }

  ngOnInit(): void {
    this.enderecos = [];
    this.formAddress = this.createForm();
    this.userService.getEndereco().subscribe((data) => {
      data.forEach((valor, i) => {
        this.enderecos.push(data[i]);
      })
      //   this.formAddress.controls['cep'].patchValue(data.cepEndereco);
      //   this.formAddress.controls['endereco'].patchValue(data.endereco);
      //   this.formAddress.controls['bairro'].patchValue(data.bairroEndereco);
      //   this.formAddress.controls['numero'].patchValue(data.numeroEndereco);
      //   this.formAddress.controls['complemento'].patchValue(data.complementoEndereco);
      //   this.formAddress.controls['estado'].patchValue(data.estadoEndereco);
      //   this.formAddress.controls['cidade'].patchValue(data.cidadeEndereco);
       })
  }


}
