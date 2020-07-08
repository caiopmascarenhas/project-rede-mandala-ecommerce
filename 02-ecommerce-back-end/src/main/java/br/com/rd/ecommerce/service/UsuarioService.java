package br.com.rd.ecommerce.service;


import br.com.rd.ecommerce.base.UniqueFieldException;
import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.model.Usuario;
import br.com.rd.ecommerce.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static org.springframework.http.ResponseEntity.badRequest;

@Service("UsuarioService")
public class UsuarioService {

    @Autowired
    UsuarioRepository repository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SenhaGeneratorService senhaService;

    public ResponseEntity<List<Usuario>> listar() {

        return ResponseEntity.ok().body(repository.findAll());
    }

    public Usuario cadastrar(Usuario usuario) {

        if(repository.findByEmailUsuario(usuario.getEmailUsuario()).isPresent()){
            throw new UniqueFieldException("Email já cadastrado");
        }

        if (usuario.getCpfUsuario() == null || usuario.getDataNascimento() == null || usuario.getNomeUsuario() == null ||
                usuario.getSobrenomeUsuario() == null || usuario.getEmailUsuario() == null){
            throw new IllegalArgumentException("Nem todos os campos foram preenchidos");
        }

        usuario.setSenhaUsuario(Criptografia.engriptografar(usuario.getSenhaUsuario()));
        return repository.save(usuario);

    }
    public Usuario esqueciSenha(String email) {
        Usuario usuario = repository.findByEmailUsuario(email).
                orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Email não encontrado"));


                String senha = senhaService.novaSenha();

                emailService.sendEmailEsqueciSenha(usuario.getEmailUsuario(), senha);
                usuario.setSenhaUsuario(Criptografia.engriptografar(senha));


                return repository.save(usuario);

    }

    public Usuario buscar(Integer id) throws Exception {
        Usuario usuario = repository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado"));

        for (Cartoes cartao: usuario.getCartoes()) {
            cartao.setNumeroCartao("**** **** **** " + Criptografia.descriptografarDado(cartao.getNumeroCartao()).substring(12,16));
            cartao.setCodigoSeguranca("***");
            cartao.setNomeProprietario(Criptografia.descriptografarDado(cartao.getNomeProprietario()).replaceAll("[a-zA-Z\\u00C0-\\u017F]", "*"));
            cartao.setValidadeCartao(Criptografia.descriptografarDado(cartao.getValidadeCartao()));
        }

        return usuario;
    }

    public Usuario atualizar(Usuario usuario){

        Usuario usuarioEntity = repository.findById(usuario.getIdUsuario())
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario não encontrado"));

        if (usuario.getCpfUsuario() == null || usuario.getDataNascimento() == null || usuario.getNomeUsuario() == null ||
            usuario.getSobrenomeUsuario() == null || usuario.getEmailUsuario() == null){
            throw new IllegalArgumentException("Nem todos os campos foram preenchidos");
        }
        usuarioEntity.setCpfUsuario(usuario.getCpfUsuario());
        usuarioEntity.setDataNascimento(usuario.getDataNascimento());
        usuarioEntity.setNomeUsuario(usuario.getNomeUsuario());
        usuarioEntity.setSobrenomeUsuario(usuario.getSobrenomeUsuario());
        usuarioEntity.setEmailUsuario(usuario.getEmailUsuario());

        return repository.save(usuarioEntity);


    }


}
