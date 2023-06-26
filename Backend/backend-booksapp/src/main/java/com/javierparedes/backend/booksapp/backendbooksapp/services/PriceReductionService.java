package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;
import java.util.Optional;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;

public interface PriceReductionService {
    List<PriceReduction>findAll();
    Optional<PriceReduction> findById(Long id);
    PriceReduction save(PriceReduction priceReduction);
    Optional<PriceReduction> update(PriceReduction priceReduction, Long id);
    void remove(Long id);
}
