package br.com.rd.ecommerce.repository;


import br.com.rd.ecommerce.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {
    public Optional<List<Endereco>> findByIdUsuario(Integer idUsuario);
}
