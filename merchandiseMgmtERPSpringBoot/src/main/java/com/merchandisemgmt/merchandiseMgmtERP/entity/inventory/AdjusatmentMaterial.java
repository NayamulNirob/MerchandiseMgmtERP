package com.merchandisemgmt.merchandiseMgmtERP.entity.inventory;

import com.merchandisemgmt.merchandiseMgmtERP.entity.OrderItem;
import com.merchandisemgmt.merchandiseMgmtERP.entity.RawMateriaes;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Warehouse;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdjusatmentMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String remarks;

    private double quantity;

    private double price;

    @ManyToOne
    @JoinColumn
    private Stock stock;

    @ManyToOne
    @JoinColumn
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn
    private RawMateriaes rawMateriaes;

    @ManyToOne
    @JoinColumn
    private OrderItem orderItem;
}
