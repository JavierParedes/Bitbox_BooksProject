package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import java.util.Optional;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;

public interface SupplierService{
    List<Supplier> findAll();
    Optional<Supplier> findById(Long id);
    Supplier save(Supplier supllier);
    Optional<Supplier> update(Supplier supllier, Long id);
    void remove(Long id);
}
