package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.merchandisemgmt.merchandiseMgmtERP.entity.RawMateriaes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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
    private double price;

    private String puchaseStatus;

    private LocalDateTime purchaseDate;

    private LocalDateTime dalivaryDate;

    private int quantity;

    private double tax;

    private double paid;

    private double totalPrice;



    @ManyToOne
    @JoinColumn
    private Warehouse warehouse;

    @JsonBackReference
    @ManyToOne
    @JoinColumn
    private Supplier supplier;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.EAGER)
    private List<InventoryItem> inventoryItemList;

}
