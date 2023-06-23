package com.javierparedes.backend.booksapp.backendbooksapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.User;
import com.javierparedes.backend.booksapp.backendbooksapp.services.UserService;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("")
    public List<User> findAll() {
        return service.findAll();
    }

}
