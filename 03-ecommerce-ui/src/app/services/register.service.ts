import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

const URL = "http://localhost:8080/usuario"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  Cadastrar(group: FormGroup){

    let addUser = {
      "emailUsuario": group.value.email,
      "senhaUsuario": group.value.novaSenha,
      "nomeUsuario": group.value.nome,
      "sobrenomeUsuario": group.value.sobrenome,
      "cpfUsuario": group.value.cpf,
      "dataNascimento": group.value.nasc,
      "enderecos": [{
        "endereco": group.value.endereco,
        "numeroEndereco": group.value.numero,
        "cepEndereco": group.value.cep,
        "bairroEndereco": group.value.bairro,
        "complementoEndereco": group.value.complemento,
        "cidadeEndereco": group.value.cidade,
        "estadoEndereco": group.value.estado,
      }],
      "cartao": {}
    }

    return this.httpClient.post(URL, addUser);
  }

}
