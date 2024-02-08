package br.edu.unicesumar.desafioprofissional.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class MainMenuController {

    @GetMapping
    public ModelAndView redirect(){

        return new ModelAndView("index");
    }

}
