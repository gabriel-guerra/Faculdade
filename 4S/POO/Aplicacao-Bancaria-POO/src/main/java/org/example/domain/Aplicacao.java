package org.example.domain;

import org.example.domain.enums.TipoAplicacao;

public class Aplicacao {

    private TipoAplicacao tipoAplicacao;
    private Double valorAplicacao;

    public Aplicacao (TipoAplicacao tipoAplicacao, Double valorAplicacao){
        this.tipoAplicacao = tipoAplicacao;
        this.valorAplicacao = valorAplicacao;
    }

}
