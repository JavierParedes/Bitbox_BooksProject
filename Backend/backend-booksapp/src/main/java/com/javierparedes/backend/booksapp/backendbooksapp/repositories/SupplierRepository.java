package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long>{
    
}
