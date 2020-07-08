package br.com.rd.ecommerce.controller;


import br.com.rd.ecommerce.model.Produto;
import br.com.rd.ecommerce.repository.ProdutoRepository;
//import br.com.rd.ecommerce.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.websocket.server.PathParam;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProdutoController {


    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/produtos")
    public List<Produto> mostrar() {
        return produtoRepository.findAll();
    }

    @GetMapping("/produtos/{id}")
    public ResponseEntity buscarId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(produtoRepository.findById(id));
    }

    @PostMapping("/nomeproduto")
    public ResponseEntity buscarId(@RequestBody List<Integer> listaDeIds) {

        List lista = new ArrayList();

        for(int num: listaDeIds){
           Produto produto = produtoRepository.findById(num).get();
           lista.add(produto);

        }

        return ResponseEntity.ok().body(lista);
    }

    @PostMapping("/produtos")
    public Produto salvar(@RequestBody Produto produto){
        return produtoRepository.save(produto);
    }

    @PutMapping("/produtos")
    public ResponseEntity<?> atualizar(@RequestBody Produto produto){

        Produto produtoEntity = produtoRepository.findById(produto.getIdProduto())
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));

        if(produto.getNomeProduto() != null){
            produtoEntity.setNomeProduto(produto.getNomeProduto());
        }

        if(produto.getSubTitulo() != null){
            produtoEntity.setSubTitulo(produto.getSubTitulo());
        }

        if(produto.getDescricaoProduto() != null){
            produtoEntity.setDescricaoProduto(produto.getDescricaoProduto());
        }

        if(produto.getDimensoesProduto() != null){
            produtoEntity.setDimensoesProduto(produto.getDimensoesProduto());
        }

        if(produto.getComprimentoProduto() != null){
            produtoEntity.setComprimentoProduto(produto.getComprimentoProduto());
        }

        if(produto.getPesoProduto() != null){
            produtoEntity.setPesoProduto(produto.getPesoProduto());
        }

        if(produto.getDesconto() != null){
            produtoEntity.setDesconto(produto.getDesconto());
        }

        if(produto.getValorProduto() != null){
            produtoEntity.setValorProduto(produto.getValorProduto());
        }

        if(produto.getImagemPrincipal() != null){
            produtoEntity.setImagemPrincipal(produto.getImagemPrincipal());
        }

        if(produto.getImagemSecundaria() != null){
            produtoEntity.setImagemSecundaria(produto.getImagemSecundaria());
        }

        if(produto.getCategoria() != null){
            produtoEntity.setCategoria(produto.getCategoria());
        }

        return ResponseEntity.ok().body(produtoRepository.save(produtoEntity));
    }

    @DeleteMapping("/produtos/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        produtoRepository.deleteById(id);
    }
}

