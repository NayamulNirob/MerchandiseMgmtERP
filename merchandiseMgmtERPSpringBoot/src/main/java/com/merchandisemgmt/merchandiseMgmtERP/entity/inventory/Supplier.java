package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Suppliers")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private String contactPerson;
    private String email;
    private String phone;
    private String address;
    private Date createdAt;
    private Date updatedAt;
    private String status;


    @JsonManagedReference
    @OneToMany(mappedBy = "supplier",fetch = FetchType.LAZY)
    private List<Product> products;



}
