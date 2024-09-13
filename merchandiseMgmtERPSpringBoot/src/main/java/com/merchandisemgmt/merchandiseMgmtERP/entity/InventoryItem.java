package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "InventoryItems")
public class InventoryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(nullable = false)
//    private String name;

//    @Column(nullable = false)
//    private long stock;

    @Column(nullable = false)
    private String location;

//    @Column(nullable = false)
//    private String description;
//
//    @Column(nullable = false)
//    private long price;


//    id!: number;
//    name!: string;
//    stock!: number;
//    location!: string;
//    description!: string;
//    price!: number;

    @ManyToOne(optional = false,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;
}
