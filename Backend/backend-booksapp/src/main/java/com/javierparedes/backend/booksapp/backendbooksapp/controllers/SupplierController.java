package com.javierparedes.backend.booksapp.backendbooksapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;
import com.javierparedes.backend.booksapp.backendbooksapp.services.SupplierService;

@RestController
@RequestMapping("proveedores")
public class SupplierController {
     @Autowired
    private SupplierService service;

    @GetMapping("")
    public List<Supplier> findAll(){
        return service.findAll();
    }
}
