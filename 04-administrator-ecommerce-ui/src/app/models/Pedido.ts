import { ItemPedido } from './ItemPedido';

export class Pedido{

    constructor(

        public valorTotal: number,
        public idUsuario: string,
        public dataPedido: string,
        public enderecoPedido: string,
        public itensPedido: Array<ItemPedido>
        
        ){}
}
