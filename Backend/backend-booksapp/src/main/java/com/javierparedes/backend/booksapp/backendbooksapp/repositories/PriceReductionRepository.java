package com.javierparedes.backend.booksapp.backendbooksapp.repositories;
import org.springframework.data.repository.CrudRepository;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;

public interface PriceReductionRepository extends CrudRepository<PriceReduction, Long>{
    
}
