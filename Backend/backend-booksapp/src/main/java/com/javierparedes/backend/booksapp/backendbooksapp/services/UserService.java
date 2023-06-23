package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.User;

public interface UserService {
    List<User>findAll();
}
