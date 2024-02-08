package org.example.domain;

import org.example.domain.exceptions.DocumentoInvalidoException;

public class PessoaFisica implements Pessoa{

    private String nome;
    private String cpf;

    public PessoaFisica(String nome, String cpf){
        this.nome = nome;
        this.cpf = formataDocumento(cpf);
    }

    @Override
    public String formataDocumento(String cpf) throws DocumentoInvalidoException{
        if (cpf != null){
            cpf = cpf.replaceAll("[.-]", "");
            if (cpf.length()==11){
                return cpf;
            }else{
                throw new DocumentoInvalidoException();
            }
        }else{
            throw new DocumentoInvalidoException();
        }
    }
}
