package br.com.rd.ecommerce.service;

import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.model.Categoria;
import br.com.rd.ecommerce.model.Endereco;
import br.com.rd.ecommerce.repository.CartoesRepository;
import br.com.rd.ecommerce.repository.CategoriaRepository;
import br.com.rd.ecommerce.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service("CategoriaService")
public class CategoriaService {

    @Autowired
    CategoriaRepository repository;

    public ResponseEntity BuscarTodos() {
        return ResponseEntity.ok().body(repository.findAll());
    }

    public ResponseEntity Buscar(Long id) {

        if (id == null)
            return ResponseEntity.badRequest().body(new Exception("id está vazio"));
        return ResponseEntity.ok().body(repository.findById(id).get());
    }

    public ResponseEntity Salvar(Categoria categoria) {

        if (categoria.getDescCategoria() == null)
            return ResponseEntity.badRequest().body(new Exception("descrição do produto está nulo"));


        Categoria categotiaEntity = new Categoria();
        categotiaEntity.setDescCategoria(categoria.getDescCategoria());

        Categoria retornoEntity = repository.save(categotiaEntity);
        categoria.setIdCategoria(retornoEntity.getIdCategoria());

        return ResponseEntity.ok().body(repository.save(categoria));
    }


    public ResponseEntity Deletar(Long id) {

        if (id == null)
            return ResponseEntity.badRequest().body(new Exception("id está vazio"));

        repository.deleteById(id);
        return ResponseEntity.ok().body(true);
    }
}
