package br.com.rd.ecommerce.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_item_pedido")
public class ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idItemPedido;

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "id_produto")
    private Integer idProduto;

    @Column(name = "id_pedido")
    private Integer idPedido;

}
