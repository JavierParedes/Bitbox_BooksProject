package com.javierparedes.backend.booksapp.backendbooksapp.services;
import java.util.List;
import java.util.Optional;

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
    @Transactional(readOnly = true)
    public List<Book> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Book> findById(Long id) {
         return repository.findById(id);
    }

    @Override
    @Transactional
    public Book save(Book book) {
         return repository.save(book);
    }

    @Override
    @Transactional
    public Optional<Book> update(Book book, Long id) {
          Optional<Book> bookOptional= this.findById(id);
        if (bookOptional.isPresent()){
            Book bookDb = bookOptional.orElseThrow();
            bookDb.setName(book.getName());
            bookDb.setItemCode(book.getItemCode());
            bookDb.setDescription(book.getDescription());
            bookDb.setAuthor(book.getAuthor());
            bookDb.setGender(book.getGender());
            bookDb.setPrice(book.getPrice());
            bookDb.setPriceReductionBooks(book.getPriceReductionBooks());
            bookDb.setState(book.getState());
            bookDb.setSupplier(book.getSupplier());
            bookDb.setCreationDate(book.getCreationDate());
            bookDb.setCreatorUser(book.getCreatorUser());

            return Optional.of(this.save(bookDb));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public void remove(Long id) {
         repository.deleteById(id);
    }

}
