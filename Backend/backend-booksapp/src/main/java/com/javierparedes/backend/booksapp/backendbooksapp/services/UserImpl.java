package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.User;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.UserRepository;

@Service
public class UserImpl implements UserService{

    @Autowired
    private UserRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>)repository.findAll();
    }
    
}
