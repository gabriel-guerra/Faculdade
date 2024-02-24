package org.example.domain.exceptions;

public class TiposPessoasException extends RuntimeException{

    public TiposPessoasException(){
        super("O tipo das pessoas informadas para abertura da conta são incompatíveis.");
    }
}
