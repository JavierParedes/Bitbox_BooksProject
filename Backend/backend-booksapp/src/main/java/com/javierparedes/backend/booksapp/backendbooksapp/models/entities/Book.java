package com.javierparedes.backend.booksapp.backendbooksapp.models.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.javierparedes.backend.booksapp.backendbooksapp.enums.StateEnum;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long itemCode;

    private String description;

    private Long price;

    private List<PriceReduction> priceReduction;

    @Enumerated(EnumType.STRING)
    private StateEnum state;

    private List<Supplier> suppliers;

    private Date creationDate;

    private User creatorUser;

    public Book(Long id, String name, Long itemCode, String description, Long price,
            List<PriceReduction> priceReduction, StateEnum state, List<Supplier> suppliers, Date creationDate,
            User creatorUser) {
        this.id = id;
        this.name = name;
        this.itemCode = itemCode;
        this.description = description;
        this.price = price;
        this.priceReduction = priceReduction;
        this.state = state;
        this.suppliers = suppliers;
        this.creationDate = creationDate;
        this.creatorUser = creatorUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getItemCode() {
        return itemCode;
    }

    public void setItemCode(Long itemCode) {
        this.itemCode = itemCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public StateEnum getState() {
        return state;
    }

    public void setState(StateEnum state) {
        this.state = state;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public User getCreatorUser() {
        return creatorUser;
    }

    public void setCreatorUser(User creatorUser) {
        this.creatorUser = creatorUser;
    }

    public List<PriceReduction> getPriceReduction() {
        return priceReduction;
    }

    public void setPriceReduction(List<PriceReduction> priceReduction) {
        this.priceReduction = priceReduction;
    }

    public List<Supplier> getSuppliers() {
        return suppliers;
    }

    public void setSuppliers(List<Supplier> suppliers) {
        this.suppliers = suppliers;
    }

}
