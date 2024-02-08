package org.example.domain.exceptions;

public class PagamentoInvalidoException extends RuntimeException{

    public PagamentoInvalidoException(){
        super("A operação não pode ser concluída. O saldo da conta é inferior ao valor do pagamento.");
    }
}
