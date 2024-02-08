package org.example.domain;

import org.example.domain.enums.TipoVinculo;
import org.example.domain.exceptions.ValorMinimoPoupancaException;

import java.util.List;

public class ContaPoupanca extends Conta{

    public ContaPoupanca(Pessoa p1, String agenciaConta, Integer numeroConta, Double saldo) throws ValorMinimoPoupancaException{
        super(p1, agenciaConta, numeroConta, saldo);

        if (saldo < 50){
            throw new ValorMinimoPoupancaException();
        }
    }

    public ContaPoupanca(Pessoa p1, Pessoa p2, TipoVinculo vinculo, String agenciaConta, Integer numeroConta, Double saldo) throws ValorMinimoPoupancaException{
        super(p1, p2, vinculo, agenciaConta, numeroConta, saldo);

        if (saldo < 50){
            throw new ValorMinimoPoupancaException();
        }
    }

}
