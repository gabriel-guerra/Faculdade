package org.example.domain.enums;

public enum TipoAplicacao {

    ACOES ("Ações", 1.01),
    FUNDO_IMOBILIARIO ("Fundo imobiliário", 1.02),
    CDB ("CDB", 1.005),
    SELIC ("Selic", 1.004);

    String nome;
    Double rendimentoMensal;

    TipoAplicacao(String nome, Double rendimentoMensal){
        this.nome = nome;
        this.rendimentoMensal = rendimentoMensal;
    }

}
