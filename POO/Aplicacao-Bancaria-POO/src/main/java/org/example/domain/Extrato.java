package org.example.domain;

import java.util.Date;

public class Extrato {

    private Date data;
    private Double saldoAnterior;
    private String operacao;
    private Double valorOperacao;
    private Double saldoFinal;

    public Extrato(Date data, Double saldoAnterior, String operacao, Double valorOperacao, Double saldoFinal) {
        this.data = data;
        this.saldoAnterior = saldoAnterior;
        this.operacao = operacao;
        this.valorOperacao = valorOperacao;
        this.saldoFinal = saldoFinal;
    }

    public Date getData() {
        return data;
    }

    public Double getSaldoAnterior() {
        return saldoAnterior;
    }

    public String getOperacao() {
        return operacao;
    }

    public Double getValorOperacao() {
        return valorOperacao;
    }

    public Double getSaldoFinal() {
        return saldoFinal;
    }
}
