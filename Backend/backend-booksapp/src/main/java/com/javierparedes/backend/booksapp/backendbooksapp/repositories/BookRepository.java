package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

    
}
