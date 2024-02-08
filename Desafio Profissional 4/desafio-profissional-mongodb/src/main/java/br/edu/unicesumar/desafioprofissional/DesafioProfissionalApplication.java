package br.edu.unicesumar.desafioprofissional;

import br.edu.unicesumar.desafioprofissional.model.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class DesafioProfissionalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesafioProfissionalApplication.class, args);
	}

}
