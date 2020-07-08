package br.com.rd.ecommerce.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_cartao")
public class Cartoes implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cartao;

    @Column(name = "numero_cartao")
    private String numeroCartao;


    @Column(name = "validade_cartao")
    private String validadeCartao;


    @Column(name = "codigo_seguranca")
    private String codigoSeguranca;


    @Column(name = "nome_proprietario")
    private String nomeProprietario;

    @Column(name = "id_usuario")
    private Integer idUsuario;

}
