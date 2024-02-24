package org.example.domain.enums;

public enum TipoVinculo {

    UNIAO_CIVIL ("União Civil"),
    CASAMENTO ("Casamento"),
    UNIAO_ESTAVEL ("União Estável"),
    SOCIEDADE ("Sociedade"),
    EMPRESAS_AFILIADAS ("Empresas Afiliadas");

    private String nome;

    TipoVinculo (String nome){
        this.nome = nome;
    }
}
