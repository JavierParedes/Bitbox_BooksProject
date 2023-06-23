package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long>{
    
}
