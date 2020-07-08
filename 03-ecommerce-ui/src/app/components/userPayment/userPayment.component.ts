import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userPayment',
  templateUrl: './userPayment.component.html',
  styleUrls: ['./userPayment.component.css']
})
export class UserPaymentComponent implements OnInit {

  cartoes: any = [];
  formPayment: FormGroup;

  constructor(private toastr: ToastrService, private userService: UserService, private fb: FormBuilder, private router: Router) {
    // userService.getCartao().subscribe((data)=>{

    //   this.formPayment.controls['numeroCartao'].patchValue(data.numeroCartao);
    //   this.formPayment.controls['cvv'].patchValue(data.codigoSeguranca);
    //   this.formPayment.controls['titular'].patchValue(data.nomeProprietario);
    //   this.formPayment.controls['vencimento'].patchValue(data.validadeCartao);


    // })

  }

  private createForm(): FormGroup {
    return this.fb.group({
      numeroCartao: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)
        ])
      ),
      vencimento: new FormControl("",
        Validators.compose([Validators.required
        ])
      ),
      cvv: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])),
      titular: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  enviarForm() {
    this.userService.adicionarCartao(this.formPayment).subscribe(
      (data) => {

        this.toastr.success("", "Forma de pagamento salva");
        // this.router.navigate(['/']);
        this.ngOnInit();
      }
    )
  }

  
  deletar(id: number){
    this.userService.deletarCartao(id).subscribe((data)=>
    {
      this.toastr.success("", "Cartão excluído")
      this.ngOnInit();

    },(erro)=>{
      console.log(erro)
      console.log(erro.error.status + " - " + erro.error.error)
      this.toastr.error("", erro.error.message)
      // location.reload();
    })
  }

  ngOnInit(): void {
    this.cartoes = [];
    this.formPayment = this.createForm();
    this.userService.getCartao().subscribe((data)=>{
      data.forEach((valor, i)=>{
        this.cartoes.push(data[i]);
      })
    })
    console.log(this.cartoes)

  }

}
