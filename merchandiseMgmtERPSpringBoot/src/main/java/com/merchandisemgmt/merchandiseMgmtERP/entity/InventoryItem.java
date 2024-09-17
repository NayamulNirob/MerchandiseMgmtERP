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

    @Column(nullable = false)
    private Integer stock;

    @ManyToOne
    @JoinColumn
    private Warehouse warehouse;

    @ManyToOne(fetch = FetchType.EAGER)
    private Product product;

}
