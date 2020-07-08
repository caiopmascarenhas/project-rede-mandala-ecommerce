package br.com.rd.ecommerce.controller;

import br.com.rd.ecommerce.base.UniqueFieldException;
import br.com.rd.ecommerce.model.Endereco;
import br.com.rd.ecommerce.model.Usuario;
import br.com.rd.ecommerce.repository.UsuarioRepository;
//import br.com.rd.ecommerce.service.CriptografiaService;
import br.com.rd.ecommerce.service.Criptografia;
import br.com.rd.ecommerce.service.EmailService;
import br.com.rd.ecommerce.service.UsuarioService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.mail.MessagingException;
import javax.websocket.server.PathParam;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private EmailService emailService;

    @GetMapping("/usuario")
    public ResponseEntity<List<Usuario>> find() {

        return usuarioService.listar();
    }


    @PostMapping("/usuario")
    public ResponseEntity<?> save(@RequestBody Usuario usuario) {

        if(usuario == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Exception("Nenhum dado inserido!"));
        }
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.cadastrar(usuario));
        }catch(UniqueFieldException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
        }catch(IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }

    }

    @PostMapping("/esquecisenha")
    public ResponseEntity esqueciSenha(@RequestBody String email) {

        return ResponseEntity.ok().body(usuarioService.esqueciSenha(email));
    }

    @PostMapping("/login")
    public List<String> logar(@RequestBody String[] dados) {

        dados[1] = Criptografia.engriptografar(dados[1]);
        if(usuarioRepository.findByEmailUsuarioAndSenhaUsuario(dados[0], dados[1]) != null) {

            Usuario user = usuarioRepository.findByEmailUsuarioAndSenhaUsuario(dados[0], dados[1]);
            List<String> retorno = new ArrayList<>();
            retorno.add(user.getIdUsuario().toString());
            retorno.add(user.getNomeUsuario());
            return retorno;
        }else{
            return null;
        }
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<?> buscarId(@PathVariable("id") Integer id) {

        try{
            return ResponseEntity.ok().body(usuarioService.buscar(id));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex);
        }
    }



    @PutMapping("/profile")
    public ResponseEntity update(@RequestBody Usuario usuario){

        if(usuario == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        try{
            return ResponseEntity.ok().body(usuarioService.atualizar(usuario));
        }catch(IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }


    }

    @PutMapping("/password")
    public ResponseEntity atualizarSenha(@RequestBody ObjectNode objectNode){

        Integer id = objectNode.get("id").asInt();
        String senhaAtual = objectNode.get("senhaAtual").asText();
        senhaAtual = Criptografia.engriptografar(senhaAtual);
        String novaSenha = objectNode.get("novaSenha").asText();
        novaSenha = Criptografia.engriptografar(novaSenha);
        if(usuarioRepository.findByIdUsuarioAndSenhaUsuario(id, senhaAtual) != null ) {

            Usuario userEntity = usuarioRepository.findByIdUsuarioAndSenhaUsuario(id,senhaAtual);
            userEntity.setSenhaUsuario(novaSenha);
            return ResponseEntity.ok().body(usuarioRepository.save(userEntity));
        }else{
            return ResponseEntity.badRequest().body(new Exception("Senha atual incorreta"));
        }

    }

    @DeleteMapping("/usuario")
    public void deleteById(@PathParam("id") Integer id){
        usuarioRepository.deleteById(id);
    }
}
