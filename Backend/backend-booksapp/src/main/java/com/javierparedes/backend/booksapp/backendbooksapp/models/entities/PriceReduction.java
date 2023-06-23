package com.javierparedes.backend.booksapp.backendbooksapp.models.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "Pricereduction")
public class PriceReduction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="pricereduction")
    private Long priceReduction;
    @Column(name="startdate")
    private Date startDate;
    @Column(name="enddate")
    private Date endDate;

    @ManyToOne
    private Book books;

    public PriceReduction(Long id, Long priceReduction, Date startDate, Date endDate, Book books) {
        this.id = id;
        this.priceReduction = priceReduction;
        this.startDate = startDate;
        this.endDate = endDate;
        this.books = books;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPriceReduction() {
        return priceReduction;
    }

    public void setPriceReduction(Long priceReduction) {
        this.priceReduction = priceReduction;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Book getBooks() {
        return books;
    }

    public void setBooks(Book books) {
        this.books = books;
    }
}
