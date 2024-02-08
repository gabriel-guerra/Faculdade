package org.example.service;

import org.example.domain.*;
import org.example.domain.enums.TipoAplicacao;
import org.example.domain.exceptions.PagamentoInvalidoException;

import java.util.Date;

public class OperacoesBancariasService {

    public void deposito(Conta c, Double valor){

        Double saldoFinal = c.getSaldo() + valor;

        Extrato novoExtrato = new Extrato(new Date(), c.getSaldo(), "Depósito", valor, saldoFinal);

        c.setSaldo(saldoFinal);
        c.adicionarExtrato(novoExtrato);
    }

    public void pagamento(Conta c, Double valor){

        if (valor > c.getSaldo()){
            throw new PagamentoInvalidoException();
        }

        Double saldoFinal = c.getSaldo() - valor;

        Extrato novoExtrato = new Extrato(new Date(), c.getSaldo(), "Pagamento", valor, saldoFinal);

        c.setSaldo(saldoFinal);
        c.adicionarExtrato(novoExtrato);

    }

    public void saldo(Conta c){
        System.out.println("Saldo: "+c.getSaldo());
    }

    public void extratoPeriodo(Conta c, Date inicio, Date fim){

        int contador = 0;

        for (Extrato e : c.getExtrato()){
            if (e.getData().after(inicio) && e.getData().before(fim)){
                System.out.println("Data: " + e.getData());
                System.out.println("Saldo inicial: " + e.getSaldoAnterior());
                System.out.println("Operação: " + e.getOperacao());
                System.out.println("Valor da operação: " + e.getValorOperacao());
                System.out.println("Saldo final: " + e.getSaldoFinal() + "\n");
            }else{
                contador++;
            }
        }

        if (contador > 0){
            System.out.println("Não foram encontradas operações realizadas no período informado.");
        }
    }

    public void aplicacao(ContaCorrente cc, TipoAplicacao tipoAplicacao, Double valorAplicacao){

        Aplicacao a = new Aplicacao(tipoAplicacao, valorAplicacao);
        cc.adicionarAplicacao(a);

    }

    public void financiamento(ContaCorrente cc, Double valorFinanciado, Double jurosMensalFinanciamento, Integer duracaoMeses){

        Financiamento f = new Financiamento(valorFinanciado, jurosMensalFinanciamento, duracaoMeses);
        cc.adicionarFinanciamento(f);

    }


}
