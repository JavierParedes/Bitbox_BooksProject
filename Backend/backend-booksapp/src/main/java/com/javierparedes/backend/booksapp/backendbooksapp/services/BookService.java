package com.javierparedes.backend.booksapp.backendbooksapp.services;
import java.util.List;
import java.util.Optional;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;

public interface BookService {
    List<Book> findAll();
    Optional<Book> findById(Long id);
    Book save(Book book);
    Optional<Book> update(Book book, Long id);
    void remove(Long id);
}
