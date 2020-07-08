import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { UserService } from 'src/app/services/user.service';




import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-userCheckout',
  templateUrl: './userCheckout.component.html',
  styleUrls: ['./userCheckout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  enderecos: any = [];
  enderecoSelecionado = null;
  cartoes: any = [];
  cartaoSelecionado = null;
  cart: Cart[];
  totalquantidade: number;
  total: number;
  itemPedidos: Array<any> = []
  formCheckout: FormGroup;


  constructor(private toastr: ToastrService, private cartService: CartService, private userService: UserService, private fb: FormBuilder) {


    cartService.getProducts().forEach((data) => {

      this.itemPedidos.push({"quantidade" : data.qtde , "idProduto" : data._idProduto})


    })

    console.log(this.itemPedidos)

    this.userService.getProfile().subscribe((data) => {
      data.enderecos.forEach((valor, i) => {
        this.enderecos.push(data.enderecos[i]);
      })
      if(data.cartoes == [] || data.cartoes[0] == undefined ){
        this.formCheckout.setErrors({CartaoInvalido: true})
        $("#CartaoModal").modal('show');
      }else{
      data.cartoes.forEach((valor, i) => {
        this.cartoes.push(data.cartoes[i]);
      })
    }
      console.log(data)

    })
    // userService.getEndereco().subscribe((data) => {
    //   data.forEach((valor, i) => {
    //     this.enderecos.push(data[i]);
    //   })
    //   //   this.formAddress.controls['cep'].patchValue(data.cepEndereco);
    //   //   this.formAddress.controls['endereco'].patchValue(data.endereco);
    //   //   this.formAddress.controls['bairro'].patchValue(data.bairroEndereco);
    //   //   this.formAddress.controls['numero'].patchValue(data.numeroEndereco);
    //   //   this.formAddress.controls['complemento'].patchValue(data.complementoEndereco);
    //   //   this.formAddress.controls['estado'].patchValue(data.estadoEndereco);
    //   //   this.formAddress.controls['cidade'].patchValue(data.cidadeEndereco);
    //    })

    this.total = Cart.total;
  }


  private createForm(): FormGroup {
    return this.fb.group({

  })
}

  ngOnInit(): void {
    this.formCheckout = this.createForm();
  
    setTimeout(()=>{
      if(this.enderecoSelecionado == null){
        this.formCheckout.setErrors({EnderecoNaoSelec: true})
      }
      if(this.cartaoSelecionado == null){
        this.formCheckout.setErrors({CartaoNaoSelec: true})
      }
    }, 1)

   

  }
    
  excluirCartao(id: number){
    this.userService.deletarCartao(id).subscribe((data)=>{
      this.toastr.success("", "Cartão excluído com sucesso");
    })
  }



  formErrorEnd() {

    return this.formCheckout.hasError("EnderecoNaoSelec");
  }
  formErrorcar() {

    return this.formCheckout.hasError("CartaoNaoSelec");
  }

  selecionarEndereco(end, num ,bairro){
    this.enderecoSelecionado = end + " " + num + " " + bairro;
   this.ngOnInit();
  }

  selecionarCartao(numero, cvv){
    this.cartaoSelecionado ="Numero: " + numero + " CVV: " + cvv;
   this.ngOnInit();
  }

  finalizar(){
    this.userService.finalizarPedido(this.total, this.enderecoSelecionado,this.itemPedidos).subscribe((data) => {
      this.cartService.finalizarCompra();
      $("#exampleModal").modal('show');
    },(erro)=>{
           
      this.toastr.error("", "Falha ao finalizar pedido");
    })
  }

}
