package br.com.rd.ecommerce.repository;


        import br.com.rd.ecommerce.model.Endereco;
        import br.com.rd.ecommerce.model.Pedido;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;

        import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
        public List<Pedido> findByIdUsuario(Integer idUsuario);

}
