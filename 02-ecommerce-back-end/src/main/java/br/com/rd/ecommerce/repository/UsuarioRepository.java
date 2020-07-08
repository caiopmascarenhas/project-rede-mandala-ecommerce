package br.com.rd.ecommerce.repository;


import br.com.rd.ecommerce.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    public Optional<Usuario> findByEmailUsuario(String emailUsuario);
    public Usuario findByEmailUsuarioAndSenhaUsuario(String emailUsuario, String senhaUsuario);
    public Usuario findByIdUsuarioAndSenhaUsuario(Integer idUsuario, String senhaUsuario);
    public Usuario findByEmailUsuarioAndNomeUsuarioAndSobrenomeUsuario(String emailUsuario, String nomeUsuario,String SobrenomeUsuario);
//  public Usuario findByEmailUsuario(String emailUsuario);

}
