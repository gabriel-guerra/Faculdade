package br.edu.unicesumar.desafioprofissional.model.repository;

import br.edu.unicesumar.desafioprofissional.model.domain.Medico;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MedicoRepository extends MongoRepository<Medico, String> {

    @Query("{$or: [{nome: {$regex:'?0', $options: i}},{crm: {$regex:'?0', $options: i}}]} ")
    List<Medico> findByRegex(String regex);

    @Query("{crm:'?0'}")
    Medico findByCrm(String crm);

}
