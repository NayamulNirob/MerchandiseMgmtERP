package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(nullable = false)
    private long stock;


    @ManyToOne
    @JoinColumn
    private Warehouse warehouse;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    private Product product;



}