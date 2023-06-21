package com.javierparedes.backend.booksapp.backendbooksapp.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;
import com.javierparedes.backend.booksapp.backendbooksapp.services.BookService;

@RestController
@RequestMapping("books")
public class BookController {
    
    @Autowired
    private BookService service;

    @GetMapping("/")
    public List<Book> findAll(){
        return service.findAll();
    }
}
