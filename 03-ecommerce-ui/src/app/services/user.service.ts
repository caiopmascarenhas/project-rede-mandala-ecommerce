import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginAuthService } from './login-auth.service';
import { retry } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { itemPedido } from '../models/ItemPedido';
import { Product } from '../models/Product';


const URL = "http://localhost:8080/"


interface iCard{
  id_cartao: number,
  numeroCartao: string,
  validadeCartao: string,
  codigoSeguranca: string,
  nomeProprietario:string

}
interface iProfile{
  idUsuario: number,
  emailUsuario: string,
  nomeUsuario: string,
  sobrenomeUsuario: string,
  cpfUsuario: string,
  dataNascimento: string,
  enderecos: iaddress[],
  cartoes: iCard[]

}
interface iaddress{
  idEndereco: number,
  endereco: string,
  numeroEndereco: string,
  cepEndereco: string,
  bairroEndereco: string,
  complementoEndereco: string,
  cidadeEndereco: string,
  estadoEndereco: string
}

interface ipedido {
  idPedido: number,
  valorTotal: number,
  idUsuario: number,
  enderecoPedido: String,
  dataPedido: String,
  itensPedido: Array<iItemPedido>
}

interface iItemPedido {
  quantidade: number,
  idProduto: number
}

interface iProduto {
  nomeProduto: String,
  valorProduto: number
}




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private loginService: LoginAuthService) { }

  getCartao(){

    let idUser: number = this.loginService.getUser().userId

    return this.httpClient.get<iCard[]>(URL+ "cartao/" + idUser).pipe(
      retry(2)
    );
  }

  getProduto(idProduto) {

    return this.httpClient.get<iProduto>(URL + "produtos/" + idProduto).pipe(
      retry(2)
    )

  }

  getPedido(){
    
    let idUsuario: number = this.loginService.getUser().userId

    return this.httpClient.get<ipedido[]>(URL + "pedido/" + idUsuario).pipe(
      retry(2)
    )
  }



  getEndereco(){

    let idEndereco: number = this.loginService.getUser().userId

     return this.httpClient.get<iaddress[]>(URL+ "endereco/" + idEndereco).pipe(
       retry(2)
     );
  }

  getProfile(){

    let idProfile: number = this.loginService.getUser().userId

    return this.httpClient.get<iProfile>(URL+ "profile/" + idProfile).pipe(
      retry(2)
    );
  }

  getItemPedido() {

    return this.httpClient.get<iItemPedido>(URL + "itempedido/").pipe(retry(2))

  }


  alterarEndereco(group: FormGroup){

    // let endereco = {
      
    //     "idEndereco": this.loginService.usuario.addressId,
    //     "endereco": group.value.endereco,
    //     "numeroEndereco": group.value.numero,
    //     "cepEndereco": group.value.cep,
    //     "bairroEndereco": group.value.bairro,
    //     "complementoEndereco": group.value.complemento,
    //     "cidadeEndereco": group.value.cidade,
    //     "estadoEndereco": group.value.estado
    // }
  


    // return this.httpClient.put<JSON>(URL + "endereco/", endereco);

  }

  deletarEndereco(id: number){

    return this.httpClient.delete(URL + "endereco/" + id);

  }
  deletarCartao(id: number){

    return this.httpClient.delete(URL + "cartao/" + id);

  }

  
  adicionarCartao(group: FormGroup){

    let cartao = {
      "numeroCartao": group.value.numeroCartao,
      "validadeCartao": group.value.vencimento,
      "codigoSeguranca": group.value.cvv,
      "nomeProprietario": group.value.titular,
      "idUsuario": this.loginService.getUser().userId
  }


    return this.httpClient.post<JSON>(URL + "cartoes/", cartao);

  }

  adicionarEndereco(group: FormGroup){

    let endereco = {
      
        "endereco": group.value.endereco,
        "numeroEndereco": group.value.numero,
        "cepEndereco": group.value.cep,
        "bairroEndereco": group.value.bairro,
        "complementoEndereco": group.value.complemento,
        "cidadeEndereco": group.value.cidade,
        "estadoEndereco": group.value.estado,
        "idUsuario": this.loginService.getUser().userId
    }
  


    return this.httpClient.post<JSON>(URL + "endereco/", endereco);

  }



  finalizarPedido(total: number, endereco: String, itemPedido: Array<iItemPedido>) {
    
      let pedido = {

        "idUsuario" : this.loginService.getUser().userId,
        "valorTotal" : total,
        "enderecoPedido" : endereco,
        "dataPedido" : new Date(),
        "itensPedido" : itemPedido,
      }

    return this.httpClient.post<JSON>(URL + "pedido/", pedido)
  }

  esqueciSenha(group: FormGroup){

    let email: string = group.value.user;

    return this.httpClient.post<JSON>(URL + "esquecisenha/", email);

}




  alterarSenha(group: FormGroup){

    let senha =   {
      "id": this.loginService.getUser().userId,
      "senhaAtual":group.value.senhaAtual,
      "novaSenha": group.value.novaSenha
      
    }
  
    return this.httpClient.put<JSON>(URL + "password/", senha);

  }

  alterarProfile(group: FormGroup){

    let profile = {
      "idUsuario": this.loginService.getUser().userId,
      "emailUsuario": group.value.email,
      "nomeUsuario": group.value.nome,
      "sobrenomeUsuario": group.value.sobrenome,
      "cpfUsuario": group.value.cpf,
      "dataNascimento": group.value.nasc
  }

    return this.httpClient.put<JSON>(URL + "profile", profile);

  }
}
