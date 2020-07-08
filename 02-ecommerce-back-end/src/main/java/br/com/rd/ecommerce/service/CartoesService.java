package br.com.rd.ecommerce.service;

import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.repository.CartoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service("CartoesService")
public class CartoesService {

    @Autowired
    CartoesRepository repository;


    public List<Cartoes> listar(){
        return repository.findAll();
    }


    public List<Cartoes> buscar(Integer id) throws Exception {
        List<Cartoes> cartoes =  new ArrayList<>();
        cartoes = repository.findByIdUsuario(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cartão não encontrado"));

        for (Cartoes cartao: cartoes) {
            cartao.setNumeroCartao("**** **** **** " + Criptografia.descriptografarDado(cartao.getNumeroCartao()).substring(12,16));
            cartao.setCodigoSeguranca("***");
            cartao.setNomeProprietario(Criptografia.descriptografarDado(cartao.getNomeProprietario()).replaceAll("[a-zA-Z\\u00C0-\\u017F]", "*"));
            cartao.setValidadeCartao(Criptografia.descriptografarDado(cartao.getValidadeCartao()));
        };

        return cartoes;

    }

    public Cartoes salvar(Cartoes cartoes) throws Exception{

        if (cartoes.getNomeProprietario() == null || cartoes.getNumeroCartao() == null || cartoes.getCodigoSeguranca() == null ||
            cartoes.getValidadeCartao() == null || cartoes.getIdUsuario() == null){
            throw new IllegalArgumentException("Nem todos os campos foram preenchidos");
        }

        cartoes.setNumeroCartao(Criptografia.criptografarDado(cartoes.getNumeroCartao()));
        cartoes.setCodigoSeguranca(Criptografia.criptografarDado(cartoes.getCodigoSeguranca()));
        cartoes.setValidadeCartao(Criptografia.criptografarDado(cartoes.getValidadeCartao()));
        cartoes.setNomeProprietario(Criptografia.criptografarDado(cartoes.getNomeProprietario()));


        return repository.save(cartoes);
    }

    public Cartoes atualizar(Cartoes cartao) throws Exception {
        Cartoes cartaoEntity = repository.findById(cartao.getId_cartao())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cartão não encontrado"));

        if (cartao.getNumeroCartao() == null || cartao.getCodigoSeguranca() == null || cartao.getNomeProprietario() == null ||
                cartao.getValidadeCartao() == null || cartao.getIdUsuario() == null) {
            throw new IllegalArgumentException("Nem todos os campos foram preenchidos");
        }


            cartaoEntity.setNumeroCartao(Criptografia.criptografarDado(cartao.getNumeroCartao()));
            cartaoEntity.setCodigoSeguranca(Criptografia.criptografarDado(cartao.getCodigoSeguranca()));
            cartaoEntity.setNomeProprietario(Criptografia.criptografarDado(cartao.getNomeProprietario()));
            cartaoEntity.setValidadeCartao(Criptografia.criptografarDado(cartao.getValidadeCartao()));

            return repository.save(cartaoEntity);

    }


}
