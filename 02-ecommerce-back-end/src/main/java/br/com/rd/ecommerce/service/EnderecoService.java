package br.com.rd.ecommerce.service;

import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.model.Endereco;
import br.com.rd.ecommerce.model.Usuario;
import br.com.rd.ecommerce.repository.CartoesRepository;
import br.com.rd.ecommerce.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service("EnderecoService")
public class EnderecoService {

    @Autowired
    EnderecoRepository repository;

    public List<Endereco> listar() {
        return repository.findAll();
    }


    public List<Endereco> buscarPorUsuario(Integer id) {
        return repository.findByIdUsuario(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Nenhum endereço encontrado"));
    }

    public Endereco salvar(Endereco endereco) {
        if (endereco.getBairroEndereco() == null || endereco.getCepEndereco() == null || endereco.getCidadeEndereco() == null
                || endereco.getEndereco() == null || endereco.getEstadoEndereco() == null || endereco.getNumeroEndereco() == null){
            throw new IllegalArgumentException("Nem todoas os campos foram preenchidos");
        }

        return repository.save(endereco);
    }

    public Endereco atualizar(Endereco endereco){

        Endereco enderecoEntity = repository.findById(endereco.getIdUsuario())
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Endereço não encontrado"));

        if (endereco.getBairroEndereco() == null || endereco.getCepEndereco() == null || endereco.getCidadeEndereco() == null
                || endereco.getEndereco() == null || endereco.getEstadoEndereco() == null || endereco.getNumeroEndereco() == null){
            throw new IllegalArgumentException("Nem todoas os campos foram preenchidos");
        }

        enderecoEntity.setEndereco(endereco.getEndereco());
        enderecoEntity.setBairroEndereco(endereco.getBairroEndereco());
        enderecoEntity.setCepEndereco(endereco.getCepEndereco());
        enderecoEntity.setCidadeEndereco(endereco.getCidadeEndereco());
        enderecoEntity.setComplementoEndereco(endereco.getComplementoEndereco());
        enderecoEntity.setEstadoEndereco(endereco.getEstadoEndereco());
        enderecoEntity.setNumeroEndereco(endereco.getNumeroEndereco());

        return repository.save(enderecoEntity);
    }

    public void excluir(Endereco endereco){

        repository.delete(endereco);

    }


}
