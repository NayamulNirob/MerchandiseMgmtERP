package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
//    private long stock;

//    @Column(nullable = false)
//    private String location;

//    @Column(nullable = false)
//    private String description;

//    @Column(nullable = false)
//    private long price;

//    id!: number;
//    name!: string;
//    stock!: number;
//    location!: string;
//    description!: string;
//    price!: number;

    @Column(nullable = false)
    private Integer stock;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Warehouse warehouse;

    @OneToOne(fetch = FetchType.EAGER)
    private Product product;

}
