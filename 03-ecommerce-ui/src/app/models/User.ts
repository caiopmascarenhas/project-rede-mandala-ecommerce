import { Address } from './Address';

export class User{

    constructor( 
            private _email: string,
            private _senha: string,
            private _id?: number,
            private _nome?: string,
            private _sobrenome?: string,
            private _cpf?: string,
            private _dataNascimento?: Date,
            private _endereco?: Address
        ){}

        get email():string{
            return this._email;
        }
        
        get senha():string{
            return this._senha;
        }
        
        get nome():string{
            return this._nome;
        }
        get sobrenome():string{
            return this._sobrenome;
        }
        get cpf():string{
            return this._cpf;
        }
        get dataNascimento():Date{
            return this._dataNascimento;
        }
            

}