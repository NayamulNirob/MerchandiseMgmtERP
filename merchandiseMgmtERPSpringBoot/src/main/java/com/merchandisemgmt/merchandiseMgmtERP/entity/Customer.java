package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customers")

public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Date createdAt;

    @Column(nullable = false)
    private Date updatedAt;

//    id!: number;
//    name!: string;
//    email!: string;
//    phone!: string;
//    address!: string;
//    createdAt!: Date;
//    updatedAt!: Date;


//    @OneToMany(mappedBy = "customer" , fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    private List<OrderItem> orders;


}
