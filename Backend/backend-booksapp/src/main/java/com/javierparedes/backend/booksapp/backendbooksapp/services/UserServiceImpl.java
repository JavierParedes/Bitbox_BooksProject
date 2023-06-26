package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.User;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public Optional<User> update(User user, Long id) {

        Optional<User> userOptional= this.findById(id);
        if (userOptional.isPresent()){
            User userDb = userOptional.orElseThrow();
            userDb.setName(user.getName());
            userDb.setSurname(user.getSurname());
            userDb.setAlias(user.getAlias());
            userDb.setPassword(user.getPassword());
            userDb.setEmail(user.getEmail());
            userDb.setAddress(user.getAddress());
            userDb.setBooks(user.getBooks());
            userDb.setRol(user.getRol());

            return Optional.of(this.save(userDb));
        }
        return Optional.empty();
    }
    
}
