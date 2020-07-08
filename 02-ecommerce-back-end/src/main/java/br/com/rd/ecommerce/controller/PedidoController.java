package br.com.rd.ecommerce.controller;



        import br.com.rd.ecommerce.model.Pedido;
        import br.com.rd.ecommerce.repository.PedidoRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
public class PedidoController {

    @Autowired
    private PedidoRepository ordemPedidoRepository;

    @GetMapping("/pedido")
    public ResponseEntity<List<Pedido>> find() {
        return ResponseEntity.ok().body(ordemPedidoRepository.findAll());}

    @ResponseStatus(HttpStatus.CREATED)
    @GetMapping("/pedido/{id}")
    public ResponseEntity<List<Pedido>> find(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(ordemPedidoRepository.findByIdUsuario(id));}

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/pedido")
    public Pedido save(@RequestBody Pedido ordemPedido) {
        return ordemPedidoRepository.save(ordemPedido);
    }
}
