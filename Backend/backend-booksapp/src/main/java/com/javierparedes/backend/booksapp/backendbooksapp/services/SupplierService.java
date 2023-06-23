package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;

public interface SupplierService{
    List<Supplier> findAll();
}
