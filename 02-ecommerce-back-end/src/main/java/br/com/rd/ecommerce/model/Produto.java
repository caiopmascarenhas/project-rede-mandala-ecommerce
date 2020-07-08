package br.com.rd.ecommerce.model;


import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;
        import javax.persistence.*;
        import javax.validation.constraints.NotNull;
        import java.io.Serializable;
        import java.math.BigDecimal;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_produto")
public class Produto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduto;

    @NotNull
    @Column(name = "nome_produto")
    private String nomeProduto;

    @NotNull
    @Column(name = "sub_titulo")
    private String subTitulo;

    @NotNull
    @Lob
    @Column(name = "descricao_produto")
    private String descricaoProduto;

    @NotNull
    @Column(name = "dimensoes_produto")
    private String dimensoesProduto ;

    @NotNull
    @Column(name = "comprimento_produto")
    private String comprimentoProduto ;

    @NotNull
    @Column(name = "peso_produto")
    private String pesoProduto ;

    @NotNull
    @Column(name = "desconto")
    private BigDecimal desconto;

    @NotNull
    @Column(name = "valor_produto")
    private BigDecimal valorProduto;

//
//    @Column(name = "produto_promocao")
//    private Integer produtPromocao;

    @NotNull
    @Column(name = "imagem_principal")
    private String imagemPrincipal;

    @NotNull
    @Column(name = "imagem_secundaria")
    private String imagemSecundaria;

    @Column(name = "id_categoria")
    private Integer categoria;

}
