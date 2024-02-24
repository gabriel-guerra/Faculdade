package br.edu.unicesumar.desafioprofissional.model.repository;

import br.edu.unicesumar.desafioprofissional.model.domain.Paciente;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;

import java.util.List;

public interface PacienteRepository extends MongoRepository<Paciente, String> {

    @Query("{$or: [{nome: {$regex:'?0', $options: i}},{cpf: {$regex:'?0', $options: i}}]} ")
    List<Paciente> findByRegex(String regex);

    @Query("{cpf:'?0'}")
    Paciente findByCpf(String cpf);


}
