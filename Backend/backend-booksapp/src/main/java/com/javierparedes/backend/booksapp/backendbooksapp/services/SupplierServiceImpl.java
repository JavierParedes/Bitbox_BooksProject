package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.SupplierRepository;

@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    private SupplierRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Supplier> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Supplier> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Supplier save(Supplier supllier) {
        return repository.save(supllier);
    }

    @Override
    @Transactional
    public Optional<Supplier> update(Supplier supllier, Long id) {
        Optional<Supplier> userSupplier = this.findById(id);
        if (userSupplier.isPresent()) {
            Supplier supplierDb = userSupplier.orElseThrow();
            supplierDb.setName(supllier.getName());
            supplierDb.setAddress(supllier.getAddress());
            supplierDb.setBooks(supllier.getBooks());
            return Optional.of(this.save(supplierDb));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }
}
