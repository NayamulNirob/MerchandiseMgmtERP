package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private long price;

    //    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
//    private List<OrderItem> orderItems;
//
//    @ManyToMany(mappedBy = "product")
//    private List<Supplier> supplier;

    @ManyToMany(mappedBy = "products", cascade = CascadeType.ALL) // Removed JoinTable
    private List<Supplier> suppliers;

    @OneToMany(fetch = FetchType.EAGER)
    private List<InventoryItem> inventoryItemList;

}
