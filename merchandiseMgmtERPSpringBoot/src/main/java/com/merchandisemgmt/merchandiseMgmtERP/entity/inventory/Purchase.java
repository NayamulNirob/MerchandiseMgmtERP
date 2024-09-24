package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.merchandisemgmt.merchandiseMgmtERP.entity.RawMateriaes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String puchaseStatus;

    private LocalDateTime purchaseDate;

    private LocalDateTime dalivaryDate;

    private double price;

    private int quantity;

    private double tax;

    private double paid;

    private double total;

    @ManyToOne
    @JoinColumn
    private Supplier supplier;

    @ManyToOne
    @JoinColumn
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn
    private RawMateriaes rawMateriaes;

    @ManyToOne
    @JoinColumn
    private InventoryItem inventoryItem;
}
