package br.com.rd.ecommerce.controller;


import br.com.rd.ecommerce.model.Categoria;
import br.com.rd.ecommerce.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping("/categoria")
    public List<Categoria> find() {
        return categoriaRepository.findAll();}



    @GetMapping("/categoria/{id}")
    public ResponseEntity buscarId(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(categoriaRepository.findById(id).get());
    }
    @PostMapping("/categoria")
    public ResponseEntity save(@RequestBody Categoria categoria) {
        return ResponseEntity.ok().body(categoriaRepository.save(categoria));
    }
    @DeleteMapping("/categoria/{id}")
    public void deleteById(@PathVariable("id") long id) {
        categoriaRepository.deleteById(id);
    }
}
