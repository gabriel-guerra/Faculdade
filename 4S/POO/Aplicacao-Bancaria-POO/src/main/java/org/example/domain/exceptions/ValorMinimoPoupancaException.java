package org.example.domain.exceptions;

public class ValorMinimoPoupancaException extends RuntimeException {

    public ValorMinimoPoupancaException(){
        super("A operação não pode ser concluída. O valor mínimo para abertura de uma conta poupança é de R$ 50,00.");
    }

}
