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
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;
import com.javierparedes.backend.booksapp.backendbooksapp.services.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
    
    @Autowired
    private BookService service;

    @GetMapping("")
    public List<Book> findAll(){
        return service.findAll();
    }

     @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<Book> bookOptional = service.findById(id);

        if(bookOptional.isPresent()){
            return ResponseEntity.ok(bookOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Book book) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(book));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Book book, @PathVariable Long id){
        Optional<Book> bookOptional= service.update(book, id);
        if (bookOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(bookOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id){

        Optional<Book> bookOptional= service.findById(id);
        if (bookOptional.isPresent()){
            service.remove(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
