package com.javierparedes.backend.booksapp.backendbooksapp.models.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.javierparedes.backend.booksapp.backendbooksapp.enums.StateEnum;

@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="itemcode", unique = true)
    private Long itemCode;
    @Column(name="description")
    private String description;
    @Column(name="author")
    private String author;
    @Column(name="gender")
    private String gender;
    @Column(name="price")
    private Long price;
    
    @OneToMany(mappedBy="priceReductionBooks")
    private List<PriceReduction> priceReductionBooks;

    @Enumerated(EnumType.STRING)
    @Column(name="state")
    private StateEnum state;

    @ManyToOne
    private Supplier supplier;

    @Column(name="creationdate")
    private Date creationDate;

    @ManyToOne
    private User creatorUser;

    public Book() {
       
    }

    

    public Book(Long id, String name, Long itemCode, String description, String author, String gender, Long price,
            List<PriceReduction> priceReductionBooks, StateEnum state, Supplier supplier, Date creationDate,
            User creatorUser) {
        this.id = id;
        this.name = name;
        this.itemCode = itemCode;
        this.description = description;
        this.author = author;
        this.gender = gender;
        this.price = price;
        this.priceReductionBooks = priceReductionBooks;
        this.state = state;
        this.supplier = supplier;
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

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }



    public List<PriceReduction> getPriceReductionBooks() {
        return priceReductionBooks;
    }



    public void setPriceReductionBooks(List<PriceReduction> priceReductionBooks) {
        this.priceReductionBooks = priceReductionBooks;
    }

    

    
}
