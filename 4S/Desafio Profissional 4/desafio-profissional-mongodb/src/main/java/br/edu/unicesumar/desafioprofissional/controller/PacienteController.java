package br.edu.unicesumar.desafioprofissional.controller;

import br.edu.unicesumar.desafioprofissional.model.domain.Paciente;
import br.edu.unicesumar.desafioprofissional.model.repository.PacienteRepository;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/paciente")
public class PacienteController {

    @Autowired
    PacienteRepository pr;

    @GetMapping
    public ModelAndView getAllPacientes(){

        ModelAndView view = new ModelAndView("lista-pacientes");

        view.addObject("pacientes", pr.findAll());

        return view;
    }

    @GetMapping("/{cpf}")
    public Paciente getPacienteByCpf(@PathVariable String cpf){
        return pr.findByCpf(cpf);
    }

    @GetMapping("/pesquisa/{regex}")
    public ModelAndView getPacienteByRegex(@PathVariable String regex){

        ModelAndView view = new ModelAndView("regex-paciente");
        view.addObject("pacientes", pr.findByRegex(regex));
        return view;

    }

    @GetMapping("/novo")
    public ModelAndView formCreate(){
        ModelAndView view = new ModelAndView("novo-paciente");

        view.addObject("p", new Paciente());

        return view;
    }

    @PostMapping
    public String createPaciente(Paciente p){
        pr.save(p);
        return "redirect:/paciente";
    }

    @GetMapping("/editar/{cpf}")
    public ModelAndView formUpdate(@PathVariable String cpf){

        ModelAndView view = new ModelAndView("editar-paciente");

        Paciente p = getPacienteByCpf(cpf);

        view.addObject("p", p);

        return view;
    }

    @PostMapping("/{cpf}")
    public String updatePaciente(@PathVariable String cpf,Paciente p) {

        Paciente pacienteDb = pr.findByCpf(cpf);

        p.setId(pacienteDb.getId());

        pr.save(p);
        return "redirect:/paciente";
    }


    @PostMapping("/excluir/{cpf}")
    public String deletePacienteByCpf(@PathVariable String cpf){

        Paciente pacienteDb = pr.findByCpf(cpf);
        pr.delete(pacienteDb);
        return "redirect:/paciente";
    }

}
