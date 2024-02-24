package org.example.domain.exceptions;

public class DocumentoInvalidoException extends RuntimeException{

    public DocumentoInvalidoException(){
        super("O documento informado é inválido.");
    }
}
