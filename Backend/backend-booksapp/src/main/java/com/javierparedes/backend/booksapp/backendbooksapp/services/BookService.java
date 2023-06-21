package com.javierparedes.backend.booksapp.backendbooksapp.services;
import java.util.List;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;

public interface BookService {
    List<Book> findAll();
}
