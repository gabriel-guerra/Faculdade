package org.example.domain;

import org.example.domain.exceptions.DocumentoInvalidoException;

public class PessoaJuridica implements Pessoa{

    private String nomeFantasia;
    private String cnpj;

    public PessoaJuridica(String nome, String cnpj){
        this.nomeFantasia = nome;
        this.cnpj = formataDocumento(cnpj);
    }

    @Override
    public String formataDocumento(String cnpj) throws DocumentoInvalidoException {
        if (cnpj != null){
            cnpj = cnpj.replaceAll("[-./]", "");
            if (cnpj.length()==14){
                return cnpj;
            }else{
                throw new DocumentoInvalidoException();
            }
        }else{
            throw new DocumentoInvalidoException();
        }
    }
}
