package com.javierparedes.backend.booksapp.backendbooksapp.services;

import java.util.List;

import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;

public interface PriceReductionService {
    List<PriceReduction>findAll();
}
