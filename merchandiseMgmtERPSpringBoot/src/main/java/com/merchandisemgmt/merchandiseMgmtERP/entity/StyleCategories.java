package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StyleCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String code;
    private String discription;
    private String attachment;
    private String size;
    private String trimName;
    private double metarialQuantity;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
