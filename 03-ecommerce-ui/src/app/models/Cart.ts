import { Product } from './Product';
export class Cart extends Product{

    public _qtde = 1;
    static total: number = 0;
  quantity: number;

    get qtde():number{
        return this._qtde;
    }
    set qtde(qtde){
        this._qtde = qtde;
    }
}