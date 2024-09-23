package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codeName;
    private String measurementName;
    private String measurementDescription;
    private String measurementTolerance;
    private String small;
    private String medium;
    private String large;
    private String tolerance;
    private String attachmentName;
    private String attachmentDescription;

    @ManyToOne
    @JoinColumn
    private StyleCategories styleCategory;

}
