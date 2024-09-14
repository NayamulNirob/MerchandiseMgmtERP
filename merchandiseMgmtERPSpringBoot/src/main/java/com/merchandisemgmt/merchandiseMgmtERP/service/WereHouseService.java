package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Warehouse;
import com.merchandisemgmt.merchandiseMgmtERP.repository.WareHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WereHouseService {

    @Autowired
    private WareHouseRepository wareHouseRepository;

    public List<Warehouse> getAllWarehouses() {
        return wareHouseRepository.findAll();
    }

    public Warehouse saveWarehouse(Warehouse warehouse) {

        try {
            return wareHouseRepository.save(warehouse);
        } catch (Exception e) {
            System.err.println("Error saving product: " + e.getMessage());
            throw new RuntimeException("Failed to save product", e);
        }
    }

    public Warehouse getWarehouseById(Long id) {
        return wareHouseRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Warehouse with id " + id + " not found")
        );
    }

    public Warehouse updateWarehouse(Warehouse warehouse,long id) {
        return wareHouseRepository.save(warehouse);
    }

    public void deleteWarehouseById(Long id) {
        wareHouseRepository.deleteById(id);
    }




}
