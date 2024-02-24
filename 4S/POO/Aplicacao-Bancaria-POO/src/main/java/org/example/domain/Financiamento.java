package org.example.domain;

public class Financiamento {

    private Double valorFinanciado;
    private Double jurosMensalFinanciamento;
    private Integer duracaoMeses;
    private Double valorRestante;

    public Financiamento(Double valorFinanciado, Double jurosMensalFinanciamento, Integer duracaoMeses) {
        this.valorFinanciado = valorFinanciado;
        this.jurosMensalFinanciamento = jurosMensalFinanciamento;
        this.duracaoMeses = duracaoMeses;
        this.valorRestante = calcularValorRestante();
    }

    public Double calcularValorRestante(){

        return (valorFinanciado * jurosMensalFinanciamento * duracaoMeses);

    }
}
