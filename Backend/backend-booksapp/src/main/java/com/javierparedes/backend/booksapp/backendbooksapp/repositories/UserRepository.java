package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.repository.CrudRepository;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
    
}
