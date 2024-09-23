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
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double quantity;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String stockAdjustment;

    @ManyToOne
    @JoinColumn
    private RawMateriaes rawMateriaes;
}
