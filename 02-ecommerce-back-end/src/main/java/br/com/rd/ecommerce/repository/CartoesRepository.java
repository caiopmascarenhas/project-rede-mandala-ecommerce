package br.com.rd.ecommerce.repository;


import br.com.rd.ecommerce.model.Cartoes;
import br.com.rd.ecommerce.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartoesRepository extends JpaRepository<Cartoes, Long> {
    public Optional<List<Cartoes>> findByIdUsuario(Integer idUsuario);

}
