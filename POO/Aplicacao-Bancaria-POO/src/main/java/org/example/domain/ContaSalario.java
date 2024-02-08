package org.example.domain;

import org.example.domain.enums.TipoVinculo;

import java.util.List;

public class ContaSalario extends Conta{

    public ContaSalario(Pessoa p1, String agenciaConta, Integer numeroConta, Double saldo){
        super(p1, agenciaConta, numeroConta, saldo);
    }

    public ContaSalario(Pessoa p1, Pessoa p2, TipoVinculo vinculo, String agenciaConta, Integer numeroConta, Double saldo){
        super(p1, p2, vinculo, agenciaConta, numeroConta, saldo);
    }
}
