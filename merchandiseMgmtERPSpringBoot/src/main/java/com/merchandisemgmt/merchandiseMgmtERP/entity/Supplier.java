package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Country;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Suppliers")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private String contactPerson;
    private String email;
    private String phone;
    private String address;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String status;
    private String organization;

//    @JsonManagedReference
//    @OneToMany(mappedBy = "supplier",fetch = FetchType.LAZY)
//    private List<Product> products;

    @ManyToOne
    @JoinColumn
    private Country country;


}
