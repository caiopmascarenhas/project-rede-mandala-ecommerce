import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  find(id: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {
   }
  public getApi(): Observable<any> {
      return this.http.get("http://localhost:8080/produtos")
  }
}