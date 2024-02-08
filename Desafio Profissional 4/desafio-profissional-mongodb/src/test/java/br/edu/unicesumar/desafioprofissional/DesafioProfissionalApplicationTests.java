package br.edu.unicesumar.desafioprofissional;

import br.edu.unicesumar.desafioprofissional.model.domain.Consulta;
import br.edu.unicesumar.desafioprofissional.model.domain.Medico;
import br.edu.unicesumar.desafioprofissional.model.domain.Paciente;
import br.edu.unicesumar.desafioprofissional.model.domain.Receita;
import com.jayway.jsonpath.Criteria;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoOperations;

import javax.management.Query;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
class DesafioProfissionalApplicationTests {
	@Test
	public void testGettersSettersConsulta() {

		Consulta consulta = new Consulta();


		consulta.setId("1");
		consulta.setData_hora("2023-11-15");
		consulta.setNome_medico("Dr. Fulano");
		consulta.setCrm_medico("12345");
		consulta.setStatus_consulta("Agendada");
		consulta.setDiagnostico("Sem diagnóstico");


		assertEquals("1", consulta.getId());
		assertEquals("2023-11-15", consulta.getData_hora());
		assertEquals("Dr. Fulano", consulta.getNome_medico());
		assertEquals("12345", consulta.getCrm_medico());
		assertEquals("Agendada", consulta.getStatus_consulta());
		assertEquals("Sem diagnóstico", consulta.getDiagnostico());
	}

	@Test
	public void testAllArgsConstructorConsulta() {

		Consulta consulta = new Consulta("1", "2023-11-15", "Dr. Fulano", "12345", "Agendada", "Sem diagnóstico");

		assertEquals("1", consulta.getId());
		assertEquals("2023-11-15", consulta.getData_hora());
		assertEquals("Dr. Fulano", consulta.getNome_medico());
		assertEquals("12345", consulta.getCrm_medico());
		assertEquals("Agendada", consulta.getStatus_consulta());
		assertEquals("Sem diagnóstico", consulta.getDiagnostico());


	}

	@Test
	public void testGettersSettersMedicos() {
		Medico medico = new Medico();

		medico.setId("1");
		medico.setNome("Dr. Fulano");
		medico.setCrm("12345");
		medico.setTipo("Especialista");
		medico.setAgenda(List.of("Segunda", "Quarta", "Sexta"));

		assertEquals("1", medico.getId());
		assertEquals("Dr. Fulano", medico.getNome());
		assertEquals("12345", medico.getCrm());
		assertEquals("Especialista", medico.getTipo());
		assertEquals(List.of("Segunda", "Quarta", "Sexta"), medico.getAgenda());
	}

	@Test
	public void testAllArgsConstructorMedicos(){

		Medico medico = new Medico("1", "Dr. Fulano", "12345", "Especialista", List.of("Segunda", "Quarta", "Sexta"));


		assertEquals("1", medico.getId());
		assertEquals("Dr. Fulano", medico.getNome());
		assertEquals("12345", medico.getCrm());
		assertEquals("Especialista", medico.getTipo());
		assertEquals(List.of("Segunda", "Quarta", "Sexta"), medico.getAgenda());
	}

	@Test
	public void testConstrutorPaciente() {

		Consulta consulta = new Consulta();
		Receita receita = new Receita();


		Paciente paciente = new Paciente(
				"1",
				"Fulano",
				"12345678900",
				"Rua Teste, 123",
				"1990-01-01",
				"fulano@teste.com",
				"123456789",
				'M',
				Collections.singletonList(consulta),
				Collections.singletonList(receita)
		);


		assertEquals("1", paciente.getId());
		assertEquals("Fulano", paciente.getNome());
		assertEquals("12345678900", paciente.getCpf());
		assertEquals("Rua Teste, 123", paciente.getEndereco());
		assertEquals("1990-01-01", paciente.getData_nascimento());
		assertEquals("fulano@teste.com", paciente.getEmail());
		assertEquals("123456789", paciente.getTelefone());
		assertEquals('M', paciente.getGenero());
		assertEquals(Collections.singletonList(consulta), paciente.getConsultas());
		assertEquals(Collections.singletonList(receita), paciente.getReceitas());
	}

	@Test
	public void testGettersSettersPaciente() {
		Consulta consulta = new Consulta();
		Receita receita = new Receita();


		Paciente paciente = new Paciente();


		paciente.setId("1");
		paciente.setNome("Fulano");
		paciente.setCpf("12345678900");
		paciente.setEndereco("Rua Teste, 123");
		paciente.setData_nascimento("1990-01-01");
		paciente.setEmail("fulano@teste.com");
		paciente.setTelefone("123456789");
		paciente.setGenero('M');
		paciente.setConsultas(Collections.singletonList(consulta));
		paciente.setReceitas(Collections.singletonList(receita));

		// Verificação se os valores foram atribuídos corretamente pelos getters
		assertEquals("1", paciente.getId());
		assertEquals("Fulano", paciente.getNome());
		assertEquals("12345678900", paciente.getCpf());
		assertEquals("Rua Teste, 123", paciente.getEndereco());
		assertEquals("1990-01-01", paciente.getData_nascimento());
		assertEquals("fulano@teste.com", paciente.getEmail());
		assertEquals("123456789", paciente.getTelefone());
		assertEquals('M', paciente.getGenero());
		assertEquals(Collections.singletonList(consulta), paciente.getConsultas());
		assertEquals(Collections.singletonList(receita), paciente.getReceitas());
	}

	@Test
	public void testGettersAndSettersReceita() {
		Receita receita = new Receita();

		receita.setId("1");
		receita.setData_hora("2023-11-15");
		receita.setMedicamento("Nome do Medicamento");
		receita.setInstrucoes("Instruções para uso");
		receita.setValidae("Data de Validade");
		receita.setCrm_medico("12345");
		receita.setNome_medico("Dr. Fulano");

		// Verificação se os valores foram atribuídos corretamente pelos getters
		assertEquals("1", receita.getId());
		assertEquals("2023-11-15", receita.getData_hora());
		assertEquals("Nome do Medicamento", receita.getMedicamento());
		assertEquals("Instruções para uso", receita.getInstrucoes());
		assertEquals("Data de Validade", receita.getValidae());
		assertEquals("12345", receita.getCrm_medico());
		assertEquals("Dr. Fulano", receita.getNome_medico());
	}

	@Test
	public void testAllArgsConstructorReceita(){

		Receita receita = new Receita("1", "2023-11-15", "Nome do Medicamento", "Instruções para uso",
				"Data de Validade", "12345", "Dr. Fulano");


		assertEquals("1", receita.getId());
		assertEquals("2023-11-15", receita.getData_hora());
		assertEquals("Nome do Medicamento", receita.getMedicamento());
		assertEquals("Instruções para uso", receita.getInstrucoes());
		assertEquals("Data de Validade", receita.getValidae());
		assertEquals("12345", receita.getCrm_medico());
		assertEquals("Dr. Fulano", receita.getNome_medico());

	}

	@Test
	public void testVerificarDesafioProfissionalAplication() {

		DesafioProfissionalApplication.main(new String[]{});
	}
}
