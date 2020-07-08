package br.com.rd.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_endereco")

public class Endereco implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_endereco")
    private Integer idEndereco;


    @Column(name = "endereco",length=100)
    private String endereco;


    @Column(name = "numero_endereco",length=6)
    private String numeroEndereco;


    @Column(name = "cep_endereco",length=8)
    private String cepEndereco;

    @Column(name = "bairro_endereco")
    private String bairroEndereco;

    @Column(name = "complemento_endereco")
    private String complementoEndereco;

    @Column(name = "cidade_endereco",length=80)
    private String cidadeEndereco;

    @Column(name = "estado_endereco",length=2)
    private String estadoEndereco;

    @Column(name = "id_usuario")
    private Integer idUsuario;
}