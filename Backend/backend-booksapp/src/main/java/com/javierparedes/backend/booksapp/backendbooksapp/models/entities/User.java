package com.javierparedes.backend.booksapp.backendbooksapp.models.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.javierparedes.backend.booksapp.backendbooksapp.enums.RolEnum;

@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="surname", unique = true)
    private String surname;
    @Column(name="alias")
    private String alias;
    @Column(name="password")
    private String password;
    @Column(name="email",unique = true)
    private String email;
    @Column(name="address")
    private String address;
    
    @JsonIgnore
    @OneToMany(mappedBy="creatorUser")
    private List<Book> books;
  
    @Enumerated(EnumType.STRING)
    @Column(name="rol")
    private RolEnum rol;

    


    public User(Long id, String name, String surname, String alias, String password, String email, String address,
            List<Book> books, RolEnum rol) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.password = password;
        this.email = email;
        this.address = address;
        this.books = books;
        this.rol = rol;
    }

    public User() {
    
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public RolEnum getRol() {
        return rol;
    }

    public void setRol(RolEnum rol) {
        this.rol = rol;
    }


    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    
}
