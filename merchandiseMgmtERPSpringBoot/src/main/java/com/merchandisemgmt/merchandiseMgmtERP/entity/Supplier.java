package com.merchandisemgmt.merchandiseMgmtERP.entity;

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


//    @OneToMany(mappedBy = "supplier",cascade = CascadeType.ALL)
//    private List<Product> products;

//    id!: number;
//    name!: string;
//    contactPerson!: string;
//    email!: string;
//    phone!: string;
//    address!: string;
//    createdAt!: Date;
//    updatedAt!: Date ;

}
