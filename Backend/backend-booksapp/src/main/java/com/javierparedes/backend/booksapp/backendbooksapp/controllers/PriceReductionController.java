package com.javierparedes.backend.booksapp.backendbooksapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;
import com.javierparedes.backend.booksapp.backendbooksapp.services.PriceReductionService;

@RestController
@RequestMapping("/descuentos")
public class PriceReductionController {

    @Autowired
    private PriceReductionService service;

    @GetMapping("")
    public List<PriceReduction> findAll() {
        return service.findAll();
    }

}
