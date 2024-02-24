package org.example.service;

import org.example.domain.Pessoa;

public class VerificaPessoas {

    public static boolean verificaPessoasMesmoTipo(Pessoa p1, Pessoa p2){

        if (p1.getClass().equals(p2.getClass())){
            return true;
        }else{
            return false;
        }
    }

}
