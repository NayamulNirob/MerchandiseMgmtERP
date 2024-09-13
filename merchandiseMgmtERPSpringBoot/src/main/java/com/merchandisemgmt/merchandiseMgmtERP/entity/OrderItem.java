package com.merchandisemgmt.merchandiseMgmtERP.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "OrderItems")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "customer_id", nullable = false)
//    private Customer customer;
//
//    @ManyToOne
//    @JoinColumn(name = "product_id", nullable = false)
//    private Product product;

    @Column(nullable = false)
    private long quantity;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private Date orderDate;

    @Column(nullable = false)
    private Date deliveryDate;

    @Column(nullable = false)
    private double totalPrice ;



// id!: string;
// customerName!: string;
// product!: string;
// quantity!: number;
// status!: string;
// orderDate!: Date;
// totalPrice!: number;


}
