package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RawMateriaes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rawCatagoeyName;
    private String rawMetarialName;
    private String description;
    private double unitPrice;
    private String attachment;

    @ManyToOne
    @JoinColumn
    private StyleCategories styleCategories;

    @ManyToOne
    @JoinColumn
    private Customer customer;

}
