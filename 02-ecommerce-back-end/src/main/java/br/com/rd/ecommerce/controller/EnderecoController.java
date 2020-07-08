package br.com.rd.ecommerce.controller;

import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.model.Endereco;
import br.com.rd.ecommerce.model.Usuario;
import br.com.rd.ecommerce.repository.EnderecoRepository;
import br.com.rd.ecommerce.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class EnderecoController {

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private EnderecoService enderecoService;


    @GetMapping("/endereco")
    public ResponseEntity<List<Endereco>> find() {

        return ResponseEntity.ok().body(enderecoService.listar());
    }

    @GetMapping("/endereco/{id}")
    public ResponseEntity<List<Endereco>> findByUser(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(enderecoService.buscarPorUsuario(id));
    }


    @PostMapping("/endereco")
    public ResponseEntity<?> save(@RequestBody Endereco endereco) {

        if(endereco == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Exception("Nenhum dado inserido!"));
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.salvar(endereco));
        }catch (IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }
    }

    @PutMapping("/endereco")
    public ResponseEntity<?> update(@RequestBody Endereco endereco){

        if(endereco == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        try {
            return ResponseEntity.ok().body(enderecoService.atualizar(endereco));
        }catch (IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }
    }

    @DeleteMapping("/endereco/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Integer id){

        return enderecoRepository.findById(id).map((endereco)->{
            enderecoService.excluir(endereco);
            return ResponseEntity.status(204).build();
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Endereço não encontrado"));

    }

}
//