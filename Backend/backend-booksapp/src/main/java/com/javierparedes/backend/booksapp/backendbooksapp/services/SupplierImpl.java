package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.SupplierRepository;

@Service
public class SupplierImpl implements SupplierService{
    @Autowired
    private SupplierRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Supplier> findAll() {
        return (List<Supplier>)repository.findAll();
    }
}
