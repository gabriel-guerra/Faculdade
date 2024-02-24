package org.example.service;

import org.example.domain.*;
import org.example.domain.enums.TipoAplicacao;
import org.example.domain.enums.TipoVinculo;
import org.example.domain.exceptions.PagamentoInvalidoException;
import org.example.domain.exceptions.TiposPessoasException;
import org.example.domain.exceptions.ValorMinimoPoupancaException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Date;

public class OperacoesBancariasServiceTest {


    @Test
    public void deveCriarContaCorrenteIndividual(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaCorrente c = new ContaCorrente(p1, "123", 1, 0.0);

        Assertions.assertNotNull(c);

    }

    @Test
    public void deveCriarContaCorrentePJ(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaJuridica("Ingá Empresas", "1234.6578/9104-56");
        ContaCorrente c = new ContaCorrente(p1, "123", 1, 0.0);

        Assertions.assertNotNull(c);

    }

    @Test
    public void deveCriarContaSalarioIndividual(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaSalario c = new ContaSalario(p1, "123", 1, 0.0);

        Assertions.assertNotNull(c);

    }

    @Test
    public void deveCriarContaPoupancaIndividual(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaPoupanca c = new ContaPoupanca(p1, "123", 1, 50.0);

        Assertions.assertNotNull(c);

    }


    @Test
    public void deveCriarContaPoupancaIndividualErroSaldo(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");

        ValorMinimoPoupancaException resultado = Assertions.assertThrows(ValorMinimoPoupancaException.class, () ->
                new ContaPoupanca(p1, "123", 1, 0.0));
        Assertions.assertEquals("A operação não pode ser concluída. O valor mínimo para abertura de uma " +
                "conta poupança é de R$ 50,00.", resultado.getMessage());

    }

    @Test
    public void deveCriarContaCorrenteConjunta(){

        OperacoesBancariasService obs = new OperacoesBancariasService();

        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        Pessoa p2 = new PessoaFisica("Joana Ribeiro", "12345678911");
        TipoVinculo tipoVinculo = TipoVinculo.UNIAO_ESTAVEL;
        ContaCorrente c = new ContaCorrente(p1, p2, tipoVinculo, "123", 2, 0.0);

        Assertions.assertNotNull(c);

    }

    @Test
    public void deveCriarContaPoupancaConjuntaErroSaldo(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        Pessoa p2 = new PessoaFisica("Joana Ribeiro", "12345678911");
        TipoVinculo tipoVinculo = TipoVinculo.UNIAO_ESTAVEL;

        ValorMinimoPoupancaException resultado = Assertions.assertThrows(ValorMinimoPoupancaException.class, () ->
                new ContaPoupanca(p1, p2, tipoVinculo, "123", 1, 0.0));
        Assertions.assertEquals("A operação não pode ser concluída. O valor mínimo para abertura de uma " +
                "conta poupança é de R$ 50,00.", resultado.getMessage());

    }

    @Test
    public void deveCriarContaCorrenteConjuntaErroPessoas(){

        OperacoesBancariasService obs = new OperacoesBancariasService();

        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        Pessoa p2 = new PessoaJuridica("Empresa Ingá", "12345678911145");
        TipoVinculo tipoVinculo = TipoVinculo.UNIAO_ESTAVEL;

        TiposPessoasException resultado = Assertions.assertThrows(TiposPessoasException.class, () ->
                new ContaPoupanca(p1, p2, tipoVinculo, "123", 1, 0.0));
        Assertions.assertEquals("O tipo das pessoas informadas para abertura da conta são incompatíveis.", resultado.getMessage());
    }

    @Test
    public void deveRealizarDepositoContaCorrenteIndividual(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaCorrente c = new ContaCorrente(p1, "123", 1, 0.0);


        obs.deposito(c, 50.0);

        Assertions.assertEquals(50, c.getSaldo());

    }

    @Test
    public void deveRealizarDepositoContaCorrenteConjunta(){

        OperacoesBancariasService obs = new OperacoesBancariasService();

        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        Pessoa p2 = new PessoaFisica("Joana Ribeiro", "12345678911");
        TipoVinculo tipoVinculo = TipoVinculo.UNIAO_ESTAVEL;
        ContaCorrente c = new ContaCorrente(p1, p2, tipoVinculo, "123", 2, 0.0);

        obs.deposito(c, 50.0);
        Assertions.assertEquals(50, c.getSaldo());

    }

    @Test
    public void deveRealizarPagamentoErro(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaCorrente c = new ContaCorrente(p1, "123", 2, 0.0);

        PagamentoInvalidoException resultado = Assertions.assertThrows(PagamentoInvalidoException.class, () -> obs.pagamento(c, 50.0));
        Assertions.assertEquals("A operação não pode ser concluída. O saldo da conta é inferior ao valor do pagamento.", resultado.getMessage());

    }

    @Test
    public void deveMostrarSaldo() {

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");

        ContaCorrente c = new ContaCorrente(p1, "123", 2, 75.0);

        obs.saldo(c);

    }

    @Test
    public void deveMostrarExtratoPeriodoValido(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");

        ContaCorrente c = new ContaCorrente(p1, "123", 2, 0.0);

        obs.deposito(c, 50.0);
        obs.pagamento(c, 25.0);

        obs.extratoPeriodo(c, new Date("09/01/2023"), new Date("09/30/2024"));

    }

    @Test
    public void deveMostrarExtratoPeriodoInvalido(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");

        ContaCorrente c = new ContaCorrente(p1, "123", 2, 0.0);

        obs.deposito(c, 50.0);
        obs.pagamento(c, 25.0);

        obs.extratoPeriodo(c, new Date("01/01/2023"), new Date("01/30/2023"));

    }

    @Test
    public void deveCriarAplicacao(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaCorrente cc = new ContaCorrente(p1, "123", 2, 0.0);
        TipoAplicacao tipoAplicacao = TipoAplicacao.FUNDO_IMOBILIARIO;

        obs.aplicacao(cc, tipoAplicacao, 500.0);
        Assertions.assertFalse(cc.getAplicacoes().isEmpty());

    }

    @Test
    public void deveCriarFinanciamento(){

        OperacoesBancariasService obs = new OperacoesBancariasService();
        Pessoa p1 = new PessoaFisica("João Silva", "12346578910");
        ContaCorrente cc = new ContaCorrente(p1, "123", 2, 0.0);

        obs.financiamento(cc, 30000.0,  1.002,  60);
        Assertions.assertFalse(cc.getFinanciamentos().isEmpty());

    }

}
