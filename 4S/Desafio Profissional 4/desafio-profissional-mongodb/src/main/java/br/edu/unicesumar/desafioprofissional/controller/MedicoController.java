package br.edu.unicesumar.desafioprofissional.controller;

import br.edu.unicesumar.desafioprofissional.model.domain.Medico;
import br.edu.unicesumar.desafioprofissional.model.domain.Paciente;
import br.edu.unicesumar.desafioprofissional.model.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/medico")
public class MedicoController {

    @Autowired
    MedicoRepository mr;

    @GetMapping
    public ModelAndView getAllMedico(){
        ModelAndView view = new ModelAndView("lista-medicos");

        view.addObject("medicos", mr.findAll());

        return view;
    }

    @GetMapping("/{crm}")
    public Medico getMedicoByCrm(@PathVariable String crm){
        return mr.findByCrm(crm);
    }


    @GetMapping("/pesquisa/{regex}")
    public ModelAndView getMedicoByRegex(@PathVariable String regex){

        ModelAndView view = new ModelAndView("regex-medico");
        view.addObject("medicos", mr.findByRegex(regex));
        return view;

    }

    @GetMapping("/novo")
    public ModelAndView formCreate(){
        ModelAndView view = new ModelAndView("novo-medico");

        view.addObject("m", new Medico());

        return view;
    }

    @PostMapping
    public String createPaciente(Medico m){
        mr.save(m);
        return "redirect:/medico";
    }

    @GetMapping("/editar/{crm}")
    public ModelAndView formUpdate(@PathVariable String crm){

        ModelAndView view = new ModelAndView("editar-medico");

        Medico m = getMedicoByCrm(crm);

        view.addObject("m", m);

        return view;
    }

    @PostMapping("/{crm}")
    public String updateMedicoByCpf(@PathVariable String crm, Medico m){

        Medico medicoDB = mr.findByCrm(crm);

        m.setId(medicoDB.getId());

        mr.save(m);
        return "redirect:/medico";
    }

    @PostMapping("/excluir/{crm}")
    public String deleteMedicoByCrm(@PathVariable String crm){

        Medico medicoDB = mr.findByCrm(crm);
        mr.delete(medicoDB);
        return "redirect:/medico";
    }

}
