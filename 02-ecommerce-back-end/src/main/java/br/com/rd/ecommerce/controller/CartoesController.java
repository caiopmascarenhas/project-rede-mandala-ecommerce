package br.com.rd.ecommerce.controller;

import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.repository.CartoesRepository;
import br.com.rd.ecommerce.service.CartoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class CartoesController {

    @Autowired
    private  CartoesRepository cartoesRepository;

    @Autowired
    private CartoesService cartoesService;

    @GetMapping("/cartoes")
    public ResponseEntity<List<Cartoes>> find() {
        return ResponseEntity.ok().body(cartoesService.listar());
    }

    @GetMapping("/cartao/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Integer id) {
        try{
            return ResponseEntity.ok().body(cartoesService.buscar(id));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex);
        }

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cartoes")
    public ResponseEntity<?> save(@RequestBody Cartoes cartoes) {

        if(cartoes == null) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Exception("Nenhum dado inserido!"));
        }
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(cartoesService.salvar(cartoes));
        }catch (IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex);

        }
    }

    @PutMapping("/cartao")
    public ResponseEntity<?> update(@RequestBody Cartoes cartao){

        if(cartao == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        try{
            return ResponseEntity.ok().body(cartoesService.atualizar(cartao));
        }catch(IllegalArgumentException ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex);
        }
    }

    @DeleteMapping("/cartao/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){

        return cartoesRepository.findById(id).map((cartao)->{
            cartoesRepository.delete(cartao);
            return ResponseEntity.status(204).build();
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cartão não encontrado"));

    }

}
