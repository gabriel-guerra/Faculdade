package org.example.domain;

import org.example.domain.enums.TipoVinculo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ContaCorrente extends Conta{

    private List<Aplicacao> aplicacoes;
    private List<Financiamento> financiamentos;


    public ContaCorrente(Pessoa p1, String agenciaConta, Integer numeroConta, Double saldo){
        super(p1, agenciaConta, numeroConta, saldo);
        this.aplicacoes = new ArrayList<Aplicacao>();
        this.financiamentos = new ArrayList<Financiamento>();
    }

    public ContaCorrente(Pessoa p1, Pessoa p2, TipoVinculo vinculo, String agenciaConta, Integer numeroConta, Double saldo){
        super(p1, p2, vinculo, agenciaConta, numeroConta, saldo);
        this.aplicacoes = new ArrayList<Aplicacao>();
        this.financiamentos = new ArrayList<Financiamento>();
    }

    public void adicionarAplicacao(Aplicacao a){
        aplicacoes.add(a);
    }

    public List<Aplicacao> getAplicacoes(){
        return aplicacoes;
    }

    public void adicionarFinanciamento(Financiamento f){
        financiamentos.add(f);
    }

    public List<Financiamento> getFinanciamentos() {
        return financiamentos;
    }
}
