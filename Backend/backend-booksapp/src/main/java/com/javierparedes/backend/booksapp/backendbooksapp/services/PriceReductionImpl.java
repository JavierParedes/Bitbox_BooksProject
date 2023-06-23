package com.javierparedes.backend.booksapp.backendbooksapp.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.PriceReductionRepository;

@Service
public class PriceReductionImpl implements PriceReductionService{

    @Autowired
    private PriceReductionRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<PriceReduction> findAll() {
        return (List<PriceReduction>)repository.findAll();
    }
}
