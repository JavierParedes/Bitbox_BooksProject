package com.javierparedes.backend.booksapp.backendbooksapp.services;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepository repository;

    @Override
    @Transactional(readOnly = true);
    public List<Book> findAll() {
        return (List<Book>)repository.findAll();
    }

}
