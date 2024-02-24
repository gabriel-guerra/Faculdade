package br.edu.unicesumar.desafioprofissional.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Paciente {

    @Id
    private String id;
    private String nome;
    @Indexed(unique = true)
    private String cpf;
    private String endereco;
    private String data_nascimento;
    private String email;
    private String telefone;
    private Character genero;
    private List<Consulta> consultas;
    private List<Receita> receitas;

}