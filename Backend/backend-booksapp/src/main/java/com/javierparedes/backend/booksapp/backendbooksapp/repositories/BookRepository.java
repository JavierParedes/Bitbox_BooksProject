package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.repository.CrudRepository;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;

public interface BookRepository extends CrudRepository<Book, Long>{

    
}
