package com.javierparedes.backend.booksapp.backendbooksapp.services;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.javierparedes.backend.booksapp.backendbooksapp.models.entities.PriceReduction;
import com.javierparedes.backend.booksapp.backendbooksapp.repositories.PriceReductionRepository;

@Service
public class PriceReductionServiceImpl implements PriceReductionService{

    @Autowired
    private PriceReductionRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<PriceReduction> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<PriceReduction> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public PriceReduction save(PriceReduction priceReduction) {
        return repository.save(priceReduction);
    }

    @Override
    @Transactional
    public Optional<PriceReduction> update(PriceReduction priceReduction, Long id) {
         Optional<PriceReduction> priceReductionOptional= this.findById(id);
        if (priceReductionOptional.isPresent()){
            PriceReduction priceReductionDb = priceReductionOptional.orElseThrow();
            priceReductionDb.setPriceReduction(priceReduction.getPriceReduction());
            priceReductionDb.setStartDate(priceReduction.getStartDate());
            priceReductionDb.setEndDate(priceReduction.getEndDate());
            priceReductionDb.setPriceReductionBooks(priceReduction.getPriceReductionBooks());

            return Optional.of(this.save(priceReductionDb));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }
}
