package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.repository.CrudRepository;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;

public interface SupplierRepository extends CrudRepository<Supplier, Long>{
    
}
