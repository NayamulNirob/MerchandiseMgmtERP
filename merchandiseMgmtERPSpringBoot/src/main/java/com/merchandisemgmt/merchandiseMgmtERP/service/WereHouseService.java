package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.inventory.InventoryItem;
import com.merchandisemgmt.merchandiseMgmtERP.entity.inventory.Warehouse;
import com.merchandisemgmt.merchandiseMgmtERP.repository.InventoryItemRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.WareHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WereHouseService {

    @Autowired
    private WareHouseRepository wareHouseRepository;
    @Autowired
    private InventoryItemRepository inventoryItemRepository;

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

        List<InventoryItem> items = inventoryItemRepository.findByWarehouseId(id);
        for (InventoryItem item : items) {
            item.setWarehouse(null);
            inventoryItemRepository.save(item);
        }

        wareHouseRepository.deleteById(id);
    }




}
