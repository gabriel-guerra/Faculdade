package br.edu.unicesumar.desafioprofissional.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Medico {

    @Id
    private String id;
    private String nome;
    private String crm;
    private String tipo;
    private List<String> agenda;

}
