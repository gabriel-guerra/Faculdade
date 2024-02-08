package org.example.domain;

import org.example.domain.exceptions.DocumentoInvalidoException;

public interface Pessoa {

    public String formataDocumento(String documento) throws DocumentoInvalidoException;

}
