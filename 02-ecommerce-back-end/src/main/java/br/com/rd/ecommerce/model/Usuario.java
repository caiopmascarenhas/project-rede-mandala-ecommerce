package br.com.rd.ecommerce.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_usuario")

public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @NotNull
    @Column(name = "email_usuario", length = 100, unique = true)
    private String emailUsuario;

    @NotNull
    @Column(name = "senha_usuario", length = 200)
    private String senhaUsuario;

    @NotNull
    @Column(name = "nome_usuario", length = 80)
    private String nomeUsuario;

    @NotNull
    @Column(name = "sobrenome_usuario", length = 100)
    private String sobrenomeUsuario;

    @NotNull
    @Column(name = "cpf_usuario", length = 11)
    private String cpfUsuario;

    @NotNull
    @Column(name = "data_nascimento")
    private String dataNascimento;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario")
    private List<Endereco> enderecos;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "id_cartao")
//    private Cartoes cartao;

    @OneToMany
    @JoinColumn(name = "id_usuario")
    private List<Cartoes> cartoes;
    
}