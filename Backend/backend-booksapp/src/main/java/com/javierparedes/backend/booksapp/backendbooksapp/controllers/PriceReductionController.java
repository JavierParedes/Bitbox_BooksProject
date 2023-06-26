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

     @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<PriceReduction> priceReductionOptional = service.findById(id);

        if(priceReductionOptional.isPresent()){
            return ResponseEntity.ok(priceReductionOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody PriceReduction priceReduction) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(priceReduction));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody PriceReduction priceReduction, @PathVariable Long id){
        Optional<PriceReduction> priceReductionOptional= service.update(priceReduction, id);
        if (priceReductionOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(priceReductionOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id){
        Optional<PriceReduction> priceReductionOptional= service.findById(id);
        if (priceReductionOptional.isPresent()){
            service.remove(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
