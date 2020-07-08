export class CreditCard{

    constructor(
        private _id: number,
        private _numero:string,
        private _vencimento:string,
        private _cvv:string,
        private _titular:string,
    ){
    }

    get numero():string{
        return this._numero;
    }

    set numero(numero: string){
        this._numero = numero
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }
    
    get vencimento():string{
        return this._vencimento;
    }

    set vencimento(vencimento: string){
        this._vencimento = vencimento
    }

    get cvv():string{
        return this._cvv;
    }
    set cvv(cvv: string){
        this._cvv = cvv
    }
    get titular():string{
        return this._titular;
    }
    set titular(titular: string){
        this._titular = titular
    }
  
}