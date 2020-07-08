import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Produto';


const URL = "http://localhost:8080/"


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  updateProduct(value: any) {
    throw new Error("Method not implemented.");
  }
  find(id: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {
   }



  public getApi(): Observable<any> {
      return this.http.get("http://localhost:8080/produtos")
  }

  public postLista(lista: Array<any>){
    return this.http.post("http://localhost:8080/nomeproduto", lista)
  }

  public getApiParam(idProduto: number): Observable<any> {
    return this.http.get("http://localhost:8080/produtos/" + idProduto)
}


  public deletarProduto(id: number){

  return this.http.delete(URL + "produtos/" + id);

}

  public atualizarProduto(produto: Product) {
    
    return this.http.put(URL + "produtos/", produto)

  }


  public enviarProduto(a: String,b: String,c: String,d: String,e: String,f: String,g: number,h: number,i: String,j: String,k: number) {

    let produtoEnviar ={
    "nomeProduto" : a,
    "subTitulo" : b,
    "descricaoProduto" : c,
    "dimensoesProduto" : d,
    "comprimentoProduto" : e,
    "pesoProduto" : f,
    "desconto" : g,
    "valorProduto" : h,
    "imagemPrincipal" : i,
    "imagemSecundaria" : j,
    "categoria" : k
    }
      
      
      return this.http.post(URL + "produtos/", produtoEnviar).subscribe((data) => {
        
      })
  }



}