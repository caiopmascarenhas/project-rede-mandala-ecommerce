export class Product{

    constructor(
        public _idProduto:number,
        public _nomeProduto: string,
        private _subTitulo: string,
        private _descricaoProduto: string,
        private _dimensoesProduto: string,
        private _comprimentoProduto: string,
        private _pesoProduto: string,
        private _desconto: number,
        private _valorProduto:number,
        private _imagemPrincipal: string,
        private _imagemSecundaria: string,
        private _categoria: number,

      
        ){}

        get idProduto():number{
            return this._idProduto;
        }

        get nomeProduto():string{
            return this._nomeProduto;
        }

        get subTitulo():string{
            return this._subTitulo;
        }

        get descricaoProduto():string{
            return this._descricaoProduto;
        }
        get dimensoesProduto():string{
            return this._dimensoesProduto;
        }
        get comprimentoProduto():string{
            return this._comprimentoProduto;
        }

        get pesoProduto():string{
            return this._pesoProduto;
        }
        get desconto():number{
            return this._desconto;
        }
        get valorProduto():number{
            return this._valorProduto;
        }
        get imagemPrincipal():string{
            return this._imagemPrincipal;
        }
        get imagemSecundaria():string{
            return this._imagemSecundaria;
        }
        get categoria():number{
            return this._categoria;
        }


}
