package org.example.domain;

import org.example.domain.enums.TipoVinculo;
import org.example.domain.exceptions.TiposPessoasException;
import org.example.service.VerificaPessoas;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Conta {

    private List<Pessoa> proprietarios;
    private TipoVinculo vinculo;
    private String agenciaConta;
    private Integer numeroConta;
    private Double saldo;
    private List<Extrato> extrato;

    public Conta(Pessoa p1, String agenciaConta, Integer numeroConta, Double saldo){
        this.proprietarios = Arrays.asList(p1);
        this.agenciaConta = agenciaConta;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.extrato = new ArrayList<Extrato>();
    }

    public Conta(Pessoa p1, Pessoa p2, TipoVinculo vinculo, String agenciaConta, Integer numeroConta, Double saldo) throws TiposPessoasException {

        if (!VerificaPessoas.verificaPessoasMesmoTipo(p1, p2)){
            throw new TiposPessoasException();
        }

        this.proprietarios = Arrays.asList(p1, p2);
        this.agenciaConta = agenciaConta;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.extrato = new ArrayList<Extrato>();

    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public void adicionarExtrato(Extrato e){
        extrato.add(e);
    }

    public List<Extrato> getExtrato(){
        return this.extrato;
    }

}
