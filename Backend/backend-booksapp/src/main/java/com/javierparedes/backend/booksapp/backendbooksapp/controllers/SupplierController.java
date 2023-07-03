package com.javierparedes.backend.booksapp.backendbooksapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;
import com.javierparedes.backend.booksapp.backendbooksapp.services.SupplierService;

@RestController
@RequestMapping("/suppliers")
public class SupplierController {
     @Autowired
    private SupplierService service;

    @GetMapping("")
    public List<Supplier> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<Supplier> supplierOptional = service.findById(id);

        if(supplierOptional.isPresent()){
            return ResponseEntity.ok(supplierOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Supplier supplier) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(supplier));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Supplier supplier, @PathVariable Long id){
        Optional<Supplier> supplierOptional= service.update(supplier, id);
        if (supplierOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(supplierOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id){

        Optional<Supplier> supplierOptional= service.findById(id);
        if (supplierOptional.isPresent()){
            service.remove(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
