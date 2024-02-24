package br.edu.unicesumar.desafioprofissional.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Consulta {

    @Id
    private String id;
    private String data_hora;
    private String nome_medico;
    private String crm_medico;
    private String status_consulta;
    private String diagnostico;

}
